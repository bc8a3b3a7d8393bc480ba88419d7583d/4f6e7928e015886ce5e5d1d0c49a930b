import { testSnapshots } from '../../../../utils/test.util';

import Component from './IntroductionPage.component';

describe('Modules/Landing - IntroductionPage', () => {
  testSnapshots(Component, [
    {
      description: 'basic render',
      props: {
        data: {
          title: 'title',
          text: 'text',
          image: 'page1',
        },
      },
    },
  ]);
});
