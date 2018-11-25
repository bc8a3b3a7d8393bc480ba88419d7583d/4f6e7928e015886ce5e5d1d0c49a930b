import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Header.component.styles';
import { translateWithNamespace } from '../../../../i18n';
import Constants from '../../../../constants/index';
import AppImages from '../../../../assets/images/app';

import LanguageItem from '../LanguageList/LanguageItem/LanguageItem.component';

const i18n = translateWithNamespace('landing.header');

const Header = ({ languageName, languageCode, countryCode, countryName }) => (
  <View style={styles.container}>
    {/* Logo */}
    <Image
      style={styles.logo}
      source={AppImages.logoWhite}
      resizeMode={Image.resizeMode.contain}
    />

    {/* welcome text */}
    <Text style={styles.welcomeText}>
      {i18n('welcome', { appName: Constants.APP_NAME })}
    </Text>

    {/* detect language */}
    <Text style={styles.detectedLanguageText}>{i18n('detectedLanguage')}</Text>
    <LanguageItem
      languageCode={languageCode}
      languageName={languageName}
      countryCode={countryCode}
      countryName={countryName}
      selected
      containerStyle={styles.languageItem}
    />
  </View>
);

Header.propTypes = {
  languageCode: PropTypes.string.isRequired,
  languageName: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
};

export default Header;
