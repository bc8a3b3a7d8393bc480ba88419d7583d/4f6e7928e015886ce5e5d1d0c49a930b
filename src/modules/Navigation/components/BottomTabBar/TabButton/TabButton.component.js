import React, { Component } from 'react';
import { Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import styles from './TabButton.component.styles';
import { NavigationImages } from '../../../../../assets/images';

class TabButton extends Component {
  onPress = () => {
    const { onPress, route } = this.props;
    onPress(route);
  };

  render() {
    const { testID, title, selected, icon } = this.props;
    const titleStyle = [styles.titleText, selected && styles.titleTextSelected];
    const iconName = selected ? `${icon}Selected` : icon;
    return (
      <TouchableWithoutFeedback
        testID={testID}
        onPress={this.onPress}
        style={styles.touchingArea}
      >
        <View style={styles.container}>
          <Image style={styles.icon} source={NavigationImages.tab[iconName]} />
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
  icon: PropTypes.string.isRequired,
};

export default TabButton;
