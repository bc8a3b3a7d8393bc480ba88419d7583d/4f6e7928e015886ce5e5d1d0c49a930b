import { StyleSheet } from 'react-native';
import { COLORS, METRICS } from '../../../themes/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  buttonContainer: {
    backgroundColor: COLORS.white,
  },
  skipButton: {
    height: METRICS.button.atBottomScreenHeight,
  },
});

export default styles;
