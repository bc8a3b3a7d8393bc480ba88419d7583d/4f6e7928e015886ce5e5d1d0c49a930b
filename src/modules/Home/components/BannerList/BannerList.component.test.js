import { testSnapshots } from '../../../../utils/test.utils';

import Component from './BannerList.component';

describe('Modules/Home - BannerList', () => {
  testSnapshots(Component, [
    {
      description: 'basic render',
      props: {
        onPress: jest.fn(),
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
