import React, { Component } from 'react';
import {
  ScrollView,
  View,
  TouchableWithoutFeedback,
  Switch,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './FlightBooking.view.styles';

import Footer from './Footer/Footer.component';
import FlightBookingItem from './FlightBookingItem/FlightBookingItem.component';
import { translateWithNamespace } from '../../../i18n';
import DateUtils from '../../../utils/date.utils';
import IconSet from '../../../components/Icon/Icon.component';
import { COLORS } from '../../../themes';

const i18n = translateWithNamespace('flightBooking.content');

class FlightBookingView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromCity: 'Da Nang',
      fromAirport: 'DAD',
      toCity: 'Ho Chi Minh',
      toAirport: 'SGN',
      departureDate: moment().valueOf(),
      returnDate: moment().valueOf(),
      passengers: { adult: 1, child: 0, infant: 0 },
      seatClass: 'Economy',
      roundTrip: false,
    };
  }

  onSwapAirport = () => {
    this.setState(state => {
      const { fromCity, fromAirport, toCity, toAirport } = state;
      return {
        fromCity: toCity,
        fromAirport: toAirport,
        toCity: fromCity,
        toAirport: fromAirport,
      };
    });
  };

  onSetRoundTrip = value => {
    this.setState({
      roundTrip: value,
    });
  };

  onSearchFlights = () => {};

  onSelectAirport = () => {};

  renderDestinationItem = () => (
    <View style={styles.section}>
      <View style={styles.leftColumn}>
        {this.renderFromItem()}
        {this.renderTotem()}
      </View>
      <TouchableWithoutFeedback onPress={this.onSwapAirport}>
        <View style={styles.rightColumn}>
          <View style={styles.rightColumnIcon}>
            <IconSet name="check" size={20} color={COLORS.white} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  renderFromItem = () => {
    const { fromCity, fromAirport } = this.state;
    const value = `${fromCity} (${fromAirport})`;
    return (
      <FlightBookingItem
        onPress={this.onSelectAirport}
        title={i18n('from')}
        value={value}
        icon="check"
      />
    );
  };

  renderTotem = () => {
    const { toCity, toAirport } = this.state;
    const value = `${toCity} (${toAirport})`;
    return (
      <FlightBookingItem
        onPress={this.onSelectAirport}
        title={i18n('to')}
        value={value}
        icon="check"
      />
    );
  };

  renderDateItem = () => {
    const { roundTrip } = this.state;
    return (
      <View style={styles.section}>
        <View style={styles.leftColumn}>
          {this.renderDepartureDateItem()}
          {this.renderReturnDateItem()}
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.roundTripTitle}>{i18n('roundTrip')}</Text>
          <Switch
            onTintColor={COLORS.darkBlue}
            value={roundTrip}
            onValueChange={this.onSetRoundTrip}
          />
        </View>
      </View>
    );
  };

  renderDepartureDateItem = () => {
    const { departureDate } = this.state;
    const value = DateUtils.format(
      departureDate,
      DateUtils.supportedDateFormats.ddddDDMMMYYYY,
    );
    return (
      <FlightBookingItem
        onPress={this.onSelectAirport}
        title={i18n('departureDate')}
        value={value}
        icon="check"
      />
    );
  };

  renderReturnDateItem = () => {
    const { returnDate } = this.state;
    const value = DateUtils.format(
      returnDate,
      DateUtils.supportedDateFormats.ddddDDMMMYYYY,
    );
    return (
      <FlightBookingItem
        onPress={this.onSelectAirport}
        title={i18n('returnDate')}
        value={value}
        icon="check"
      />
    );
  };

  renderPassengerItem = () => {
    const { passengers } = this.state;
    const { adult, child, infant } = passengers;
    const value = `${adult} ${i18n('adult')}, ${child} ${i18n(
      'child',
    )}, ${infant} ${i18n('infant')}`;
    return (
      <FlightBookingItem
        onPress={this.onSelectAirport}
        title={i18n('passengers')}
        value={value}
        icon="check"
      />
    );
  };

  renderSeatClassItem = () => {
    const { seatClass } = this.state;
    return (
      <FlightBookingItem
        onPress={this.onSelectAirport}
        title={i18n('seatClass')}
        value={seatClass}
        icon="check"
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.renderDestinationItem()}
          {this.renderDateItem()}
          {this.renderPassengerItem()}
          {this.renderSeatClassItem()}
        </ScrollView>
        <Footer onPress={this.onSearchFlights} />
      </View>
    );
  }
}

FlightBookingView.propTypes = {};
export default FlightBookingView;
