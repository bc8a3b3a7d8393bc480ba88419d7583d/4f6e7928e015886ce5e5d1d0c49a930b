import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';

import styles from './NavigationBar.component.styles';

const NavigationBar = ({ children, style }) => (
  <View style={[styles.container, style]}>
    <View style={styles.statusBar} />
    <View style={styles.navigationBar}>{children}</View>
  </View>
);

NavigationBar.defaultProps = {
  style: {},
};

NavigationBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: ViewPropTypes.style,
};

export default NavigationBar;
