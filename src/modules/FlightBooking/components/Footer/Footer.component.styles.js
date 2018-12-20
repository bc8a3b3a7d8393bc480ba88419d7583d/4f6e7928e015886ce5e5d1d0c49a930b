import { StyleSheet } from 'react-native';
import { COLORS, METRICS } from '../../../../themes';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.orange,
    height: METRICS.button.atBottomScreenHeight,
    borderRadius: METRICS.borderRadius.normal,
    marginHorizontal: METRICS.spacing.medium,
  },
  buttonTitle: {
    color: COLORS.white,
  },
});

export default styles;
