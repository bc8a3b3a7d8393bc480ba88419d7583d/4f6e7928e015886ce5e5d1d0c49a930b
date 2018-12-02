import { StyleSheet } from 'react-native';
import { COLORS, METRICS, TEXT_STYLES } from '../../../../themes/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: METRICS.spacing.normal,
    marginBottom: METRICS.spacing.normal,
    borderRadius: 10,
    margin: 3,
    minWidth: 90,
    maxHeight: 70,
    shadowOffset: {
      width: 1,
      height: 1,
    },

    shadowOpacity: 0.3,
    shadowColor: COLORS.black300,
    elevation: 4,
    backgroundColor: COLORS.white,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: COLORS.white,
    marginBottom: METRICS.spacing.small,
  },
  title: {
    ...TEXT_STYLES.h4,
    color: COLORS.black,
  },
});

export default styles;
