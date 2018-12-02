import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './HeaderButton.component.styles';

const HeaderButton = ({ children, isRightButton, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={[
        styles.iconContainer,
        isRightButton && styles.rightButtonContainer,
      ]}
    >
      {children}
    </View>
  </TouchableOpacity>
);

HeaderButton.defaultProps = {
  isRightButton: false,
};

HeaderButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isRightButton: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

export { HeaderButton };
export default withNavigation(HeaderButton);
