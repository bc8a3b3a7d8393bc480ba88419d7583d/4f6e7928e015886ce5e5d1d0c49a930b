import React from 'react';
import { shallow } from 'enzyme';

import { testSnapshots } from '../../../../utils/test.utils';
import Component from './Landing.view';
import LanguageList from '../LanguageList/LanguageList.component';
import { Routes } from '../../../Navigation/Navigation.constant';

describe('Modules/Landing - Landing View', () => {
  const componentProps = {
    setLanguage: jest.fn(),
    selectedLanguage: {
      languageCode: 'vi',
      languageName: 'Tiếng Việt',
      countryCode: 'VN',
      countryName: 'Việt Nam',
    },
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

  test('should call setLanguage prop which is passed from reducer action ', () => {
    const component = render(componentProps);
    component
      .find(LanguageList)
      .props()
      .onSelectLanguage(componentProps.selectedLanguage);
    expect(componentProps.setLanguage).toBeCalledWith(
      componentProps.selectedLanguage,
    );
  });

  test('should navigate to Introduction screen after tapping on Continue button in footer', () => {
    const component = render(componentProps);
    component
      .find('Footer')
      .props()
      .onPress();
    expect(componentProps.navigation.navigate).toBeCalledWith(
      Routes.AuthNavigator.Introduction,
    );
  });
});
