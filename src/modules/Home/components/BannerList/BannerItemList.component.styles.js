import { StyleSheet } from 'react-native';
import { METRICS } from '../../../../themes/index';
import Constants from './Constants';

const styles = StyleSheet.create({
  container: {
    paddingVertical: METRICS.spacing.medium,
    overflow: 'hidden',
  },
  list: {
    borderRadius: METRICS.borderRadius.normal,
    overflow: 'hidden',
  },
  background: {
    width: '100%',
  },
});

const setGridStyleIfSectionTypeIsGrid = sectionType =>
  sectionType === Constants.SECTION_TYPES.GRID && {
    flexWrap: 'wrap',
    flexDirection: 'row',
  };
export default styles;
export { setGridStyleIfSectionTypeIsGrid };
