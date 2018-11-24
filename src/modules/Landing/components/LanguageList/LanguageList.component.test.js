import { testSnapshots } from '../../../../utils/test.util';

import Component from './LanguageList.component';

describe('Modules/Landing - Language List', () => {
  const componentProps = {
    onSelectLanguage: jest.fn(),
  };

  testSnapshots(Component, [
    {
      description: 'basic render',
      props: componentProps,
    },
  ]);
});
