import React, { Component } from 'react';
import {
  View,
  ViewPropTypes,
  TouchableWithoutFeedback,
  Image,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import { getFlagIconByCountryCode } from './LanguageItem.assets';
import styles, {
  getBackgroundStyle,
  getTextStyle,
} from './LanguageItem.styles';
import IconSet from '../../../../../components/Icon/Icon.component';
import { COLORS } from '../../../../../themes';

class LanguageItem extends Component {
  constructor(props) {
    super(props);
  }

  onPressItem = () => {
    const {
      onPress,
      languageCode,
      languageName,
      countryCode,
      countryName,
    } = this.props;
    onPress({
      countryCode,
      countryName,
      languageCode,
      languageName,
    });
  };

  renderFlagIcon = countryCode => (
    <Image
      style={styles.flagIcon}
      source={getFlagIconByCountryCode(countryCode)}
    />
  );

  renderText = value => {
    const { selected } = this.props;
    return <Text style={[styles.text, getTextStyle(selected)]}>{value}</Text>;
  };

  renderCheckIcon = () => {
    const { selected } = this.props;
    if (selected) {
      return (
        <View style={styles.checkIconContainer}>
          <IconSet name="check" color={COLORS.white} />
        </View>
      );
    }

    return <View />;
  };

  render() {
    const {
      selected,
      countryCode,
      countryName,
      languageName,
      containerStyle,
    } = this.props;
    const wrapperStyle = [
      styles.container,
      getBackgroundStyle(selected),
      containerStyle,
    ];
    return (
      <TouchableWithoutFeedback onPress={this.onPressItem}>
        <View style={wrapperStyle}>
          {this.renderFlagIcon(countryCode)}
          {this.renderText(`${countryName} (${languageName})`)}
          {this.renderCheckIcon()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

LanguageItem.propTypes = {
  containerStyle: ViewPropTypes.style,
  selected: PropTypes.bool,
  languageCode: PropTypes.string.isRequired,
  languageName: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

LanguageItem.defaultProps = {
  onPress: () => {},
  selected: false,
  containerStyle: {},
};

export default LanguageItem;
