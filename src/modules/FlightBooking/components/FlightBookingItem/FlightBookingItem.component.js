import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

import styles from './FlightBookingItem.component.styles';
import IconSet from '../../../../components/Icon/Icon.component';
import COLORS from '../../../../themes/colors';

const FlightBookingItem = ({ onPress, icon, title, value }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <IconSet name={icon} color={COLORS.black300} size={20} />
      <View style={styles.information}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

FlightBookingItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default FlightBookingItem;
