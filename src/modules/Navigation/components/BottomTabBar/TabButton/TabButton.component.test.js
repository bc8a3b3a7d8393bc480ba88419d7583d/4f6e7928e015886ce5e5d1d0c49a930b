import React from 'react';
import { shallow } from 'enzyme';
import { testSnapshots } from '../../../../../utils/test.utils';

import Component from './TabButton.component';

describe('Navigation/Component - TabButton', () => {
  const componentProps = {
    title: 'Tab Button',
    route: 'Home',
    onPress: jest.fn(),
  };

  const render = props => shallow(<Component {...props} />);

  testSnapshots(Component, [
    {
      description: 'should render default state',
      props: componentProps,
    },
    {
      description: 'should render with selected state',
      props: {
        ...componentProps,
        selected: true,
      },
    },
  ]);

  test('should call onPress prop when the user taps on tab bar item', () => {
    const component = render(componentProps);
    component.find('TouchableWithoutFeedback').simulate('press');

    expect(componentProps.onPress).toBeCalledWith(componentProps.route);
  });
});
