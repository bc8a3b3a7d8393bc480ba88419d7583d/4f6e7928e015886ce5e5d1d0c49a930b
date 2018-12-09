import React from 'react';
import { shallow } from 'enzyme';

import { testSnapshots } from '../../../../utils/test.utils';

import Component from './BookingMenu.component';

describe('Modules/Home - BookingMenu', () => {
  const componentProps = {
    onPressFlight: jest.fn(),
  };

  const render = props => shallow(<Component {...props} />);

  testSnapshots(Component, [
    {
      description: 'basic render',
      props: componentProps,
    },
  ]);

  test('get position of component', () => {
    const wrapper = render(componentProps);
    const instance = wrapper.instance();

    instance.onLayout({
      nativeEvent: {
        layout: {
          y: 1,
          height: 1,
        },
      },
    });

    expect(instance.position).toEqual(2);
  });
});
