import TestIDConstantsUtils from './TestID.constants.utils';

describe('Constants/TestID.constants.utils', () => {
  test('get screen view test id', () => {
    const screenName = 'landing-screen';
    const result = TestIDConstantsUtils.getScreenViewId(screenName);

    expect(result).toEqual(`landing-screen-view`);
  });
});
