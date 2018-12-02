import { StyleSheet } from 'react-native';
import { COLORS, TEXT_STYLES } from '../../../../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    ...TEXT_STYLES.h4,
    color: COLORS.black300,
  },
  titleTextSelected: {
    color: COLORS.darkBlue,
  },
  icon: {},
  touchingArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
