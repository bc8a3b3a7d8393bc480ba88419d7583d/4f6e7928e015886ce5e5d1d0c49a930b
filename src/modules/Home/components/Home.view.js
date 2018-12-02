import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Home.view.styles';
import Login from './Login/Login.component';
import BookingMenu from './BookingMenu/BookingMenu.component';

class HomeView extends Component {
  onLogin = () => {};

  onPressFlight = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Login onPress={this.onLogin} />
        <BookingMenu onPressFlight={this.onPressFlight} />
      </View>
    );
  }
}

HomeView.propTypes = {};
export default HomeView;
