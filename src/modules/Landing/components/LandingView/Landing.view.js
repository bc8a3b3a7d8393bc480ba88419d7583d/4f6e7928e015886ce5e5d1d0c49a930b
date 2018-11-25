import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Landing.view.styles';
import { Header, LanguageList, Footer } from '../index';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';
import { Routes } from '../../../Navigation/Navigation.constant';

class LandingView extends Component {
  /*
    Parameters:
      languageObj = {
        countryCode,
        countryName,
        languageCode,
        languageName,
      }
   */
  onSelectLanguage = languageObj => {
    const { setLanguage } = this.props;
    setLanguage(languageObj);
  };

  onNavigateToIntroductionScreen = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate(Routes.Authentication.Introduction);
  };

  render() {
    const {
      selectedLanguage: {
        languageName,
        languageCode,
        countryCode,
        countryName,
      },
    } = this.props;
    return (
      <ScreenView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Header
            languageName={languageName}
            languageCode={languageCode}
            countryCode={countryCode}
            countryName={countryName}
          />
          <LanguageList
            onSelectLanguage={this.onSelectLanguage}
            languageCode={languageCode}
            countryCode={countryCode}
          />
        </ScrollView>
        <Footer onPress={this.onNavigateToIntroductionScreen} />
      </ScreenView>
    );
  }
}

LandingView.propTypes = {
  setLanguage: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.shape({
    languageCode: PropTypes.string.isRequired,
    languageName: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
  }).isRequired,
};

export default LandingView;
