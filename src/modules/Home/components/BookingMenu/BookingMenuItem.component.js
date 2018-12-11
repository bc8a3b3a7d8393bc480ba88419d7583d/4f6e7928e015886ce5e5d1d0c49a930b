import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import styles from './BookingMenuItem.component.styles';

import HomeImages from '../../../../assets/images/home';

const BookingMenuItem = ({ image, title, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <Image
        source={HomeImages[image]}
        style={styles.image}
        resizeMode={Image.resizeMode.cover}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableWithoutFeedback>
);

BookingMenuItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookingMenuItem;
