import { StyleSheet } from 'react-native';
import { COLORS, METRICS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  statusBar: {
    flex: 1,
    marginTop: METRICS.statusBarHeight,
  },
});

export default styles;
