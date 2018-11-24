import { StyleSheet } from 'react-native';
import { COLORS, TEXT_STYLES } from '../../themes';

const styles = StyleSheet.create({
  container: {
    height: 40,
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
