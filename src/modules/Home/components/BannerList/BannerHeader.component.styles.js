import { StyleSheet } from 'react-native';
import { COLORS, METRICS, TEXT_STYLES } from '../../../../themes/index';

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: METRICS.spacing.normal,
    paddingBottom: METRICS.spacing.normal,
  },
  headerTitle: {
    ...TEXT_STYLES.h2,
    color: COLORS.black,
  },
  headerDescription: {
    ...TEXT_STYLES.h4,
    color: COLORS.black300,
  },
});

export default styles;
