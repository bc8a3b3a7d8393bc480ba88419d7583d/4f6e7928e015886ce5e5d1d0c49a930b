import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Landing.view.styles';
import { Header, LanguageList, Footer } from '../index';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';

const LandingView = ({
  onSelectLanguage,
  selectedLanguage: { languageName, languageCode, countryCode, countryName },
}) => (
  <ScreenView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Header
        languageName={languageName}
        languageCode={languageCode}
        countryCode={countryCode}
        countryName={countryName}
      />
      <LanguageList
        onSelectLanguage={onSelectLanguage}
        languageCode={languageCode}
        countryCode={countryCode}
      />
    </ScrollView>
    <Footer />
  </ScreenView>
);

LandingView.propTypes = {
  onSelectLanguage: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.shape({
    languageCode: PropTypes.string.isRequired,
    languageName: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
  }).isRequired,
};

export default LandingView;
