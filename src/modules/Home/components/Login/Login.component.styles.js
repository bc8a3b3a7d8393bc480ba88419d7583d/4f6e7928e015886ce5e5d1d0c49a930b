import { StyleSheet } from 'react-native';
import { COLORS, METRICS, TEXT_STYLES } from '../../../../themes/index';

const styles = StyleSheet.create({
  container: {
    height: 110,
    padding: METRICS.spacing.medium,
    backgroundColor: COLORS.background,
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
  },
  rightColumn: {
    flex: 1,
    marginLeft: METRICS.spacing.normal,
  },
  title: {
    ...TEXT_STYLES.h3,
  },
  text: {
    ...TEXT_STYLES.h4,
  },
});

export default styles;
