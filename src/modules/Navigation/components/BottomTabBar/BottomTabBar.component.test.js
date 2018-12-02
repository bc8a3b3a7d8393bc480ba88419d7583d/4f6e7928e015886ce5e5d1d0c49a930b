import React from 'react';
import { shallow } from 'enzyme';
import DeviceInfo from 'react-native-device-info';

import { testSnapshots } from '../../../../utils/test.utils';

import Component from './BottomTabBar.component';
import TabButton from './TabButton/TabButton.component';
import { iPhoneX } from '../../../../utils/platform.utils';

describe('Navigation/Component - BottomTabBar', () => {
  const componentProps = {
    navigation: {
      navigate: jest.fn(),
    },
  };

  const render = props => shallow(<Component {...props} />);

  testSnapshots(Component, [
    {
      description: 'basic render',
      props: componentProps,
    },
  ]);

  test('should rerender the tab and navigate to selected route after tapping on tab bar item', () => {
    const component = render(componentProps);
    component
      .find(TabButton)
      .at(1)
      .props()
      .onPress('saved');

    const nextRoute = 'saved';
    expect(component.instance().state.selectedTab).toEqual(nextRoute);
    expect(componentProps.navigation.navigate).toBeCalledWith({
      routeName: nextRoute,
    });
  });

  test('should render in iPhone X', () => {
    const getModelMock = jest.spyOn(DeviceInfo, 'getModel');
    getModelMock.mockImplementation(() => iPhoneX);
    const component = render(componentProps);
    expect(component).toMatchSnapshot();
    getModelMock.mockRestore();
  });
});
