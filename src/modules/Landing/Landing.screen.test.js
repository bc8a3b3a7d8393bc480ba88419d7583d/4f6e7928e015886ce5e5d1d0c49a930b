import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { testSnapshots } from '../../utils/test.util';
import Container, { LandingScreen as Component } from './Landing.screen';
import { LandingView } from './components';

const mockStore = configureStore();
const componentProps = {
  selectedLanguage: {
    languageCode: 'vi',
    languageName: 'Tiếng Việt',
    countryName: 'Việt Nam',
    countryCode: 'VN',
  },
  setLanguage: jest.fn(),
};

describe('Modules/Landing - Landing Screen - UI component', () => {
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
      .find(LandingView)
      .at(0)
      .props()
      .onSelectLanguage(componentProps.selectedLanguage);
    expect(componentProps.setLanguage).toBeCalledWith(
      componentProps.selectedLanguage,
    );
  });
});

describe('Modules/Landing - Landing Screen - Redux Container', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      language: {
        ...componentProps.selectedLanguage,
      },
    });
    store.dispatch = jest.fn();
    wrapper = shallow(<Container store={store} />);
  });

  test('maps state and dispatch to props', () => {
    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        setLanguage: expect.any(Function),
        selectedLanguage: componentProps.selectedLanguage,
      }),
    );
  });
});
