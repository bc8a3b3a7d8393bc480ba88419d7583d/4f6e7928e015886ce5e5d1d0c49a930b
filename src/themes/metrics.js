import { Dimensions } from 'react-native';
import { isIPhoneX } from '../utils/platform.utils';

const { width, height } = Dimensions.get('window');

const metrics = {
  spacing: {
    small: 5,
    normal: 10,
    medium: 15,
    large: 20,
  },
  borderRadius: {
    normal: 5,
  },
  statusBarHeight: isIPhoneX() ? 44 : 20,
  navigation: {
    buttonSize: 40,
    height: 44,
  },
  button: {
    defaultHeight: 40,
    atBottomScreenHeight: isIPhoneX() ? 60 : 40,
  },
  separator: {
    defaultHeight: 0.5,
  },
  device: {
    screenWidth: width,
    screenHeight: height,
  },
};

export default metrics;
