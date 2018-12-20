import { StyleSheet } from 'react-native';
import { COLORS, METRICS, TEXT_STYLES } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: METRICS.spacing.medium,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: METRICS.spacing.normal,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
  },
  rightColumnIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundTripTitle: {
    ...TEXT_STYLES.h5,
    color: COLORS.black300,
    marginVertical: METRICS.spacing.small,
  },
});

export default styles;
