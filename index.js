/* eslint-disable */
import { ENV } from '@env';
import { equals } from 'ramda';

if (!equals(ENV, 'storybook')) {
  require('./src');
} else {
  require('./storybook');
}
