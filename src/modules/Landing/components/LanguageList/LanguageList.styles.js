import { StyleSheet } from 'react-native';
import { METRICS, TEXT_STYLES } from '../../../../themes';

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: METRICS.spacing.small,
  },
  text: {
    ...TEXT_STYLES.h4,
    textAlign: 'center',
  },
});

export default styles;
