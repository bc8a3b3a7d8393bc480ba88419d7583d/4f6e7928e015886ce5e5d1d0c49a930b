import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { isDEV, isIOS, isAndroid, isIPhoneX } from './platform.utils';

describe('Utils/Platform - isDEV', () => {
  let initialENV;

  beforeEach(() => {
    initialENV = process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env.NODE_ENV = initialENV;
  });

  test('should return true when environment is "development"', () => {
    process.env.NODE_ENV = 'development';
    const result = isDEV();
    expect(result).toBeTruthy();
  });

  test('should return false when environment is "production"', () => {
    process.env.NODE_ENV = 'production';
    const result = isDEV();

    expect(result).toBeFalsy();
  });
});

describe('Utils/Platform - isIOS', () => {
  let initialPlatform;

  beforeEach(() => {
    initialPlatform = Platform.OS;
  });

  afterEach(() => {
    Platform.OS = initialPlatform;
  });

  test('should return true when platform is "ios"', () => {
    Platform.OS = 'ios';
    const result = isIOS();
    expect(result).toBeTruthy();
  });

  test('should return false when environment is "android"', () => {
    Platform.OS = 'android';
    const result = isIOS();

    expect(result).toBeFalsy();
  });
});

describe('Utils/Platform - isAndroid', () => {
  let initialPlatform;

  beforeEach(() => {
    initialPlatform = Platform.OS;
  });

  afterEach(() => {
    Platform.OS = initialPlatform;
  });

  test('should return true when platform is "android"', () => {
    Platform.OS = 'android';
    const result = isAndroid();
    expect(result).toBeTruthy();
  });

  test('should return false when environment is "ios"', () => {
    Platform.OS = 'ios';
    const result = isAndroid();

    expect(result).toBeFalsy();
  });
});

describe('Utils/Platform - isIPhoneX', () => {
  test('should return true when device model is "iPhone X"', () => {
    const getModelMock = jest.spyOn(DeviceInfo, 'getModel');
    getModelMock.mockImplementation(() => 'iPhone X');

    const result = isIPhoneX();
    expect(result).toBeTruthy();
    getModelMock.mockRestore();
  });

  test('should return true when device model is "iPhone 6"', () => {
    const getModelMock = jest.spyOn(DeviceInfo, 'getModel');
    getModelMock.mockImplementation(() => 'iPhone 6');

    const result = isIPhoneX();
    expect(result).toBeFalsy();
    getModelMock.mockRestore();
  });
});
