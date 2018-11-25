import { StyleSheet } from 'react-native';
import { COLORS, METRICS } from '../../../../themes/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    padding: METRICS.spacing.normal,
  },
});

export default styles;
