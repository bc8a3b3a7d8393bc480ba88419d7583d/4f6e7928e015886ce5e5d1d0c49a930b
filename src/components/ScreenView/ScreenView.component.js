import React from 'react';
import { ViewPropTypes, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './ScreenView.component.styles';

const ScreenView = ({ children, style, testID }) => (
  <View testID={testID} style={[styles.container, style]}>
    <View style={styles.statusBar}>{children}</View>
  </View>
);

ScreenView.propTypes = {
  style: ViewPropTypes.style,
  testID: PropTypes.string,
};

ScreenView.defaultProps = {
  style: {},
  testID: '',
};

export default ScreenView;
