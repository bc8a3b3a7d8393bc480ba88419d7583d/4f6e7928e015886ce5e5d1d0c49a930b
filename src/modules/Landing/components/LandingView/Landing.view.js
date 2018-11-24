import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Landing.view.styles';
import { Header, LanguageList, Footer } from '../index';

const LandingView = ({
  onSelectLanguage,
  selectedLanguage: { languageName, languageCode, countryCode, countryName },
}) => (
  <View style={styles.container}>
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      style={styles.scrollView}
    >
      <Header
        languageName={languageName}
        languageCode={languageCode}
        countryCode={countryCode}
        countryName={countryName}
      />
      <LanguageList onSelectLanguage={onSelectLanguage} />
    </ScrollView>
    <Footer />
  </View>
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
