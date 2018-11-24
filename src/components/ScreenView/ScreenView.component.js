import React from 'react';
import { ViewPropTypes, View } from 'react-native';

import styles from './ScreenView.component.styles';

const ScreenView = ({ children, style }) => (
  <View style={[styles.container, style]}>
    <View style={styles.statusBar}>{children}</View>
  </View>
);

ScreenView.propTypes = {
  style: ViewPropTypes.style,
};

ScreenView.defaultProps = {
  style: {},
};

export default ScreenView;
