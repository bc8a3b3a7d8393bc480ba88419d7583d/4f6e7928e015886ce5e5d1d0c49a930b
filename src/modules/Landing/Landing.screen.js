import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as LanguageActions } from '../Language/Language.reducer';

import { LandingView } from './components';

export const LandingScreen = props => <LandingView {...props} />;

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
