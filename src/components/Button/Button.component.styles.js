import { StyleSheet } from 'react-native';
import { COLORS, TEXT_STYLES, METRICS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    height: METRICS.button.defaultHeight,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...TEXT_STYLES.h4,
    color: COLORS.darkBlue,
  },
});

export default styles;
