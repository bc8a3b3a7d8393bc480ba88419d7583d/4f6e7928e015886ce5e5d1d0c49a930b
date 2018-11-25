import { testSnapshots } from '../../../../utils/test.util';

import Component from './IntroductionPage.component';

describe('Modules/Introduction - IntroductionPage', () => {
  testSnapshots(Component, [
    {
      description: 'basic render',
      props: {
        data: {
          title: 'title',
          text: 'text',
          image: 'page1',
          button: {
            title: 'button title',
          },
        },
      },
    },
  ]);

  test('check default props', () => {
    expect(Component.defaultProps).toEqual(
      expect.objectContaining({
        onPress: expect.any(Function),
      }),
    );
  });

  test('check return value of default function props', () => {
    const onPressFunctionResult = Component.defaultProps.onPress();
    expect(onPressFunctionResult).toEqual(undefined);
  });
});
