import { testSnapshots } from '../../utils/test.utils';

import Icon from './Icon.component';

describe('Fontello icon', () => {
  testSnapshots(Icon, [
    {
      description: 'basic render',
    },
  ]);
});
