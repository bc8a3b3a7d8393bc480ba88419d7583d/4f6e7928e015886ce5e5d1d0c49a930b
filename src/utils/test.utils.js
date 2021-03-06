import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { shallow } from 'enzyme';

const singleSnapTest = (wrapper, description) => {
  test(description, () => {
    expect(wrapper).toMatchSnapshot();
  });
};

const testSnapshots = (Component, configs) => {
  describe('snapshots', () => {
    configs.forEach(config => {
      const { props, description } = config;
      const wrapper = shallow(<Component {...props} />);
      singleSnapTest(wrapper, description);
    });
  });
};

export { singleSnapTest, testSnapshots };
