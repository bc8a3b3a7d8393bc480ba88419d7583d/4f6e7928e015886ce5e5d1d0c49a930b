/* eslint-disable */
import { ENV } from '@env';

if (ENV === 'storybook') {
  require('./src');
} else {
  require('./storybook');
}
