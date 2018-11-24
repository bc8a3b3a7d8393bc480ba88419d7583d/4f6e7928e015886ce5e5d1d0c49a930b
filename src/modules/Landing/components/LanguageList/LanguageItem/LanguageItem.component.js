import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import { getFlagIconByCountryCode } from './LanguageItem.assets';
import styles, {
  getBackgroundStyle,
  getTextStyle,
} from './LanguageItem.styles';
import IconSet from '../../../../../components/Icon/Icon.component';
import { COLORS } from '../../../../../themes';

class LanguageItem extends Component {
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
    return (
      <TouchableWithoutFeedback onPress={this.onPressItem}>
        <View
          style={[
            styles.container,
            getBackgroundStyle(selected),
            containerStyle,
          ]}
        >
          {/* flag icon */}
          {this.renderFlagIcon(countryCode)}

          {/* Country */}
          {this.renderText(`${countryName} (${languageName})`)}

          {/* check icon */}
          {this.renderCheckIcon()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

LanguageItem.propTypes = {
  containerStyle: View.propTypes.style,
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
