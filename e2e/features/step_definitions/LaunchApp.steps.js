import { When } from 'cucumber';
import { TestIDConstantsUtils } from '../../../src/constants/index';
import { assertElementIsVisible } from './common/element.assertions.common';

When('the {string} screen has been displayed', async screenName => {
  await assertElementIsVisible(
    TestIDConstantsUtils.getScreenViewId(screenName),
  );
});
