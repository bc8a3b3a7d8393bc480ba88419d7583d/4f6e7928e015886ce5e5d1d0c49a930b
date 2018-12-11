import { StyleSheet } from 'react-native';
import { COLORS, METRICS } from '../../../../themes/index';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: METRICS.borderRadius.normal,
    padding: METRICS.spacing.normal,
    left: METRICS.spacing.normal,
    right: METRICS.spacing.normal,
    height: 40,
    position: 'absolute',

    shadowOpacity: 0.75,
    shadowRadius: METRICS.borderRadius.normal,
    shadowColor: COLORS.black,
    shadowOffset: { height: 0, width: 0 },
  },
  itemContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default styles;
