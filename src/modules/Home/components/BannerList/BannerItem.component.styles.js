import { StyleSheet } from 'react-native';
import { COLORS, METRICS, TEXT_STYLES } from '../../../../themes/index';
import Constants from './Constants';

const styles = StyleSheet.create({
  container: {
    borderRadius: METRICS.borderRadius.normal,
    overflow: 'hidden',
    marginLeft: METRICS.spacing.normal,
    marginBottom: METRICS.spacing.normal,
  },
  title: {
    ...TEXT_STYLES.h4,
    color: COLORS.white,
    position: 'absolute',
    left: METRICS.spacing.normal,
    bottom: METRICS.spacing.normal,
    right: METRICS.spacing.normal,
  },
  image: {
    padding: METRICS.spacing.normal,
    backgroundColor: COLORS.black300,
    borderRadius: METRICS.borderRadius.normal,
  },
  icon: {
    width: 30,
    height: 30,
  },
  videoIcon: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const setSpacingStyle = isLastItem =>
  isLastItem && { marginRight: METRICS.spacing.normal };

const setStyleIfFullBanner = sectionType =>
  sectionType === Constants.SECTION_TYPES.FULL_BANNER && {
    marginLeft: 0,
    marginRight: 0,
    paddingHorizontal: METRICS.spacing.normal,
  };

const calculateImageSize = (itemStyle, data) => {
  const {
    type: sectionType,
    properties: { visibleItems, ratio, columns },
  } = itemStyle;
  const {
    attributes: { iconImage },
  } = data;

  const {
    device: { screenWidth },
  } = METRICS;
  const [widthRatio, heightRatio] = ratio.split(':');
  const numberOfColumns = parseFloat(columns || visibleItems || 1);

  let spacingPerColumn = METRICS.spacing.normal * 2;
  if (sectionType === Constants.SECTION_TYPES.GRID) {
    spacingPerColumn +=
      METRICS.spacing.normal * numberOfColumns - METRICS.spacing.normal;
  }
  const width = (screenWidth - spacingPerColumn) / numberOfColumns;
  const height = (width / widthRatio) * heightRatio;

  return {
    width: iconImage ? height : width,
    height,
  };
};

const setTitleColor = titleColor => titleColor && { color: titleColor };

export default styles;
export {
  setSpacingStyle,
  calculateImageSize,
  setTitleColor,
  setStyleIfFullBanner,
};
