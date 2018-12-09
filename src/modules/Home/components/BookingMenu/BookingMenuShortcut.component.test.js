import React from 'react';
import { shallow } from 'enzyme';

import { testSnapshots } from '../../../../utils/test.utils';

import Component from './BookingMenuShortcut.component';

describe('Modules/Home - BookingMenuShortcut', () => {
  const render = props => shallow(<Component {...props} />);

  testSnapshots(Component, [
    {
      description: 'basic render',
    },
  ]);

  test('should show menu', () => {
    jest.useFakeTimers();
    const wrapper = render();
    const instance = wrapper.instance();

    instance.startAnimation(true);
    // eslint-disable-next-line no-underscore-dangle
    expect(instance.state.animation._value).toEqual(10);
  });

  test('should hide menu', () => {
    jest.useFakeTimers();
    const wrapper = render();
    const instance = wrapper.instance();

    instance.startAnimation(true);
    // eslint-disable-next-line no-underscore-dangle
    expect(instance.state.animation._value).toEqual(10);

    instance.startAnimation(false);
    // eslint-disable-next-line no-underscore-dangle
    expect(instance.state.animation._value).toEqual(-50);
  });
});
