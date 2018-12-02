import { StyleSheet } from 'react-native';
import { COLORS, METRICS } from '../../../../themes';
import { isIPhoneX } from '../../../../utils/platform.utils';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderTopWidth: METRICS.separator.defaultHeight / 2,
    borderTopColor: COLORS.black300,
    paddingTop: METRICS.spacing.small,
    paddingBottom: isIPhoneX() ? METRICS.spacing.large : METRICS.spacing.small,
  },
});
