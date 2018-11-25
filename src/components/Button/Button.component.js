import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './Button.component.styles';

const Button = ({ title, containerStyle, titleStyle, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  containerStyle: View.propTypes.style,
  titleStyle: Text.propTypes.style,
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  containerStyle: {},
  titleStyle: {},
};

export default Button;
