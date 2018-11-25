import { StyleSheet } from 'react-native';
import { COLORS, METRICS, TEXT_STYLES } from '../../../../../themes/index';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: METRICS.spacing.normal,
    borderRadius: METRICS.borderRadius.normal,
  },
  flagIcon: {
    width: 25,
    height: 20,
    marginRight: METRICS.spacing.normal,
  },
  text: {
    ...TEXT_STYLES.h4,
    flex: 1,
  },
  checkIconContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const getBackgroundStyle = selected => ({
  backgroundColor: selected ? COLORS.white : COLORS.whiteOpacity2,
});

const getTextStyle = selected => ({
  color: selected ? COLORS.black : COLORS.white,
});

export { styles as default, getBackgroundStyle, getTextStyle };
