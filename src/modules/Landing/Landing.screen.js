import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as LanguageActions } from '../Language/Language.reducer';

import { LandingView } from './components';

export class LandingScreen extends Component {
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

  render() {
    const { selectedLanguage } = this.props;
    return (
      <LandingView
        selectedLanguage={selectedLanguage}
        onSelectLanguage={this.onSelectLanguage}
      />
    );
  }
}

LandingScreen.propTypes = {
  setLanguage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  selectedLanguage: state.language,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LanguageActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingScreen);
