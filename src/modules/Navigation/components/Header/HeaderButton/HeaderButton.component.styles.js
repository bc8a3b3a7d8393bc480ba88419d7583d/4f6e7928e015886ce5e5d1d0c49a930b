import { StyleSheet } from 'react-native';
import { METRICS } from '../../../../../themes';

const styles = StyleSheet.create({
  iconContainer: {
    width: METRICS.navigation.buttonSize,
    height: METRICS.navigation.buttonSize,
    justifyContent: 'center',
    padding: METRICS.spacing.normal,
  },
  rightButtonContainer: {
    alignItems: 'flex-end',
  },
});

export default styles;
