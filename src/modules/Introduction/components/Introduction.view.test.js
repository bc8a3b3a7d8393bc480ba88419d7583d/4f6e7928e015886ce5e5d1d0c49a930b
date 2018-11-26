import React from 'react';
import { shallow } from 'enzyme';
import R from 'ramda';
import PushNotification from 'react-native-push-notification';

import { testSnapshots } from '../../../utils/test.utils';

import Component from './Introduction.view';
import IntroductionPagesData from './Introduction.view.data';
import { Routes } from '../../Navigation/Navigation.constant';

describe('Modules/Introduction - Introduction view', () => {
  const getPageItem = handler =>
    IntroductionPagesData.find(
      item => R.path(['button', 'handler'], item) === handler,
    );
  const getPageItemProps = (component, pageItem) => {
    const pageItemIndex = IntroductionPagesData.indexOf(pageItem);
    return component
      .find('Swiper')
      .children()
      .at(pageItemIndex)
      .props();
  };
  const pressButtonInPageItem = (component, handlerName) => {
    const pageItem = getPageItem(handlerName);
    const pageItemProps = getPageItemProps(component, pageItem);
    const handler = R.path(['data', 'button', 'handler'], pageItemProps);

    component.instance()[handler]();
  };
  const componentProps = {
    navigation: {
      navigate: jest.fn(),
    },
  };

  const render = props => shallow(<Component {...props} />);

  testSnapshots(Component, [
    {
      description: 'basic render',
      props: {
        ...componentProps,
      },
    },
  ]);

  test('should render page item without button', () => {
    const component = render(componentProps);
    const pageItem = getPageItem();
    const pageItemProps = getPageItemProps(component, pageItem);
    pageItemProps.onPress();
    expect(component).toMatchSnapshot();
  });

  test('should request notification permission', () => {
    const component = render(componentProps);
    pressButtonInPageItem(component, 'onPressTurnOnNotification');

    expect(PushNotification.requestPermissions).toBeCalled();
  });

  test('should navigate to home after tapping on "Okay, I\'m In" button', () => {
    const component = render(componentProps);
    pressButtonInPageItem(component, 'onPressImIn');

    expect(componentProps.navigation.navigate).toBeCalledWith(
      Routes.Authentication.Landing,
    );
  });

  test('should navigate to home after tapping on skip button', () => {
    const component = render(componentProps);
    component.find('Button').simulate('press');

    expect(componentProps.navigation.navigate).toBeCalledWith(
      Routes.Authentication.Landing,
    );
  });
});
