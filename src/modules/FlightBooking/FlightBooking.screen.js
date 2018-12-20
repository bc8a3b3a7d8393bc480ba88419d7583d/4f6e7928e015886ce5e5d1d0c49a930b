import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as FlightBookingActions } from './FlightBooking.reducer';
import FlightBookingView from './components/FlightBooking.view';
import i18n from '../../i18n';
import { HeaderBack } from '../Navigation/components/Header/HeaderBack/HeaderBack.component';

class FlightBookingScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: i18n.t('navigation.homeNavigator.flightBooking'),
    headerLeft: <HeaderBack navigation={navigation} />,
  });

  render() {
    return <FlightBookingView {...this.props} />;
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators(FlightBookingActions, dispatch);

FlightBookingScreen.propTypes = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlightBookingScreen);
