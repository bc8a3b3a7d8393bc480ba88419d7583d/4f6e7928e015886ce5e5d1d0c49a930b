/* eslint-disable no-undef,import/no-extraneous-dependencies */

import { BeforeAll, AfterAll, setDefaultTimeout, After } from 'cucumber';

import detox from 'detox';
import { detox as config } from '../../../package';

import { logStep } from './init.steps.helper';

require('babel-polyfill');

const TIME_OUT = 120 * 1000;
setDefaultTimeout(TIME_OUT);

BeforeAll({ timeout: TIME_OUT }, async () => {
  await detox.init(config);
  // await device.launchApp();
});

After({ timeout: TIME_OUT }, async testInfo => {
  logStep(testInfo);
  await detox.cleanup();
});

AfterAll({ timeout: TIME_OUT }, async () => {
  await detox.cleanup();
});
