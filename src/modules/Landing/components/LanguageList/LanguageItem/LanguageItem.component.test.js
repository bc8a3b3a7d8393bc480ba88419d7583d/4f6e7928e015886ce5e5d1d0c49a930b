import React from 'react';
import { shallow } from 'enzyme';
import { testSnapshots } from '../../../../../utils/test.util';

import Component from './LanguageItem.component';

describe('Modules/Landing - Language Item', () => {
  const componentProps = {
    selected: false,
    languageCode: 'vi',
    languageName: 'Tiếng Việt',
    countryCode: 'VN',
    countryName: 'Việt Nam',
    onPress: jest.fn(),
  };

  const render = props => shallow(<Component {...props} />);

  testSnapshots(Component, [
    {
      description: 'should render component when the user has not selected yet',
      props: componentProps,
    },
    {
      description:
        'should render component when the user has selected language',
      props: {
        ...componentProps,
        selected: true,
      },
    },
  ]);

  test('should call onPress prop when the user taps on language item', () => {
    const component = render(componentProps);
    component.find('TouchableWithoutFeedback').simulate('press');

    expect(componentProps.onPress).toBeCalledWith({
      languageCode: 'vi',
      languageName: 'Tiếng Việt',
      countryCode: 'VN',
      countryName: 'Việt Nam',
    });
  });

  test('check default props', () => {
    expect(Component.defaultProps).toEqual(
      expect.objectContaining({
        onPress: expect.any(Function),
        selected: false,
        containerStyle: {},
      }),
    );
  });

  test('check return value of default function props', () => {
    const onPressFunctionResult = Component.defaultProps.onPress();
    expect(onPressFunctionResult).toEqual(undefined);
  });
});
