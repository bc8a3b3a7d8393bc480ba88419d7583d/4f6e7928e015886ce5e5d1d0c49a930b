import { testSnapshots } from '../../utils/test.util';

import Icon from './Icon.component';

describe('Fontello icon', () => {
  testSnapshots(Icon, [
    {
      description: 'basic render',
    },
  ]);
});
