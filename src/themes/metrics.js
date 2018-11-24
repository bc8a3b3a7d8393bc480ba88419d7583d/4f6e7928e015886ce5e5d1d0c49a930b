import { isIPhoneX } from '../utils/platform.util';

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
  button: {
    defaultHeight: 40,
    atBottomScreenHeight: isIPhoneX() ? 60 : 40,
  },
};

export default metrics;
