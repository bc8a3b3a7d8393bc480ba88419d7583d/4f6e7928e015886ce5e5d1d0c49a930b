import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { equals } from 'ramda';

const isDEV = () => equals(process.env.NODE_ENV, 'development');
const isIOS = () => equals(Platform.OS, 'ios');
const isAndroid = () => equals(Platform.OS, 'android');
const iPhoneX = 'iPhone X';
const isIPhoneX = () => isIOS() && equals(DeviceInfo.getModel(), iPhoneX);

export { isDEV, isIOS, isAndroid, isIPhoneX, iPhoneX };
