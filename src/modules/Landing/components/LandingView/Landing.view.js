import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Landing.view.styles';
import { Header, LanguageList, Footer } from '../index';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';
import { Routes } from '../../../Navigation/Navigation.constant';
import Constants from '../../../../constants';

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

  renderHeader = () => {
    const {
      selectedLanguage: {
        languageName,
        languageCode,
        countryCode,
        countryName,
      },
    } = this.props;
    return (
      <Header
        languageName={languageName}
        languageCode={languageCode}
        countryCode={countryCode}
        countryName={countryName}
      />
    );
  };

  renderLanguageList = () => {
    const {
      selectedLanguage: { languageCode, countryCode },
    } = this.props;
    return (
      <LanguageList
        onSelectLanguage={this.onSelectLanguage}
        languageCode={languageCode}
        countryCode={countryCode}
      />
    );
  };

  render() {
    return (
      <ScreenView
        style={styles.container}
        testID={Constants.TEST_IDS['landing-screen-view']}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {this.renderHeader()}
          {this.renderLanguageList()}
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
