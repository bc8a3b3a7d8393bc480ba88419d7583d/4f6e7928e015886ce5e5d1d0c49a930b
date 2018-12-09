import React from 'react';
import { shallow } from 'enzyme';

import Component from './Home.view';
import { testSnapshots } from '../../../utils/test.utils';
import data from '../Home.data';

describe('Modules/Home - BannerItemList', () => {
  const componentProps = {
    data,
  };

  const render = props => shallow(<Component {...props} />);

  testSnapshots(Component, [
    {
      description: 'basic render',
      props: componentProps,
    },
  ]);

  test('should call starting animation booking menu short when scroll', () => {
    const wrapper = render(componentProps);
    const instance = wrapper.instance();
    const mockedBookingMenu = {
      current: {
        position: 0,
      },
    };
    const mockedBookingMenuShortcut = {
      current: {
        startAnimation: jest.fn(),
      },
    };

    instance.bookingMenu = mockedBookingMenu;
    instance.bookingMenuShortcut = mockedBookingMenuShortcut;
    instance.onScroll({
      nativeEvent: {
        contentOffset: { y: 1 },
      },
    });

    expect(mockedBookingMenuShortcut.current.startAnimation).toBeCalledWith(
      true,
    );
  });
});
