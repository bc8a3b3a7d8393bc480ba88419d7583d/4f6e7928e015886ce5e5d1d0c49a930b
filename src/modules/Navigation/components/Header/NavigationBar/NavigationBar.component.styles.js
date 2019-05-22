import { StyleSheet } from 'react-native';
import { METRICS, COLORS } from '../../../../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
  statusBar: {
    height: METRICS.statusBarHeight,
  },
  navigationBar: {
    height: METRICS.navigation.height,
  },
});

export default styles;
