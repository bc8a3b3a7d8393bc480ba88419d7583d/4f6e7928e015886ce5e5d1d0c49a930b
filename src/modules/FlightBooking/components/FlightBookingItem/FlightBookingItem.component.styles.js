import { StyleSheet } from 'react-native';
import { COLORS, METRICS, TEXT_STYLES } from '../../../../themes';

const styles = StyleSheet.create({
  container: {
    padding: METRICS.spacing.normal,
    flexDirection: 'row',
    alignItems: 'center',
  },
  information: {
    flex: 1,
    marginLeft: METRICS.spacing.normal,
    borderBottomWidth: METRICS.separator.defaultHeight,
    borderBottomColor: COLORS.black300,
  },
  title: {
    ...TEXT_STYLES.h5,
    color: COLORS.black300,
  },
  value: {
    ...TEXT_STYLES.h4,
    color: COLORS.black,
    marginBottom: METRICS.spacing.small,
  },
});

export default styles;
