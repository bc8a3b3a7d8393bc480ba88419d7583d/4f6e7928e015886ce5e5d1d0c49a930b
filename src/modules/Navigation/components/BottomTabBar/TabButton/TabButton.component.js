import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import styles from './TabButton.component.styles';
import IconSet from '../../../../../components/Icon/Icon.component';
import { COLORS } from '../../../../../themes';

class TabButton extends Component {
  onPress = () => {
    const { onPress, route } = this.props;
    onPress(route);
  };

  render() {
    const { testID, title, selected } = this.props;
    const titleStyle = [styles.titleText, selected && styles.titleTextSelected];
    const iconColor = selected ? COLORS.darkBlue : COLORS.black300;

    return (
      <TouchableWithoutFeedback
        testID={testID}
        onPress={this.onPress}
        style={styles.touchingArea}
      >
        <View style={styles.container}>
          <View style={styles.icon}>
            <IconSet color={iconColor} name="check" size={30} />
          </View>
          <Text style={titleStyle}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
TabButton.defaultProps = {
  testID: '',
  selected: false,
};

TabButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  testID: PropTypes.string,
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  route: PropTypes.string.isRequired,
};

export default TabButton;
