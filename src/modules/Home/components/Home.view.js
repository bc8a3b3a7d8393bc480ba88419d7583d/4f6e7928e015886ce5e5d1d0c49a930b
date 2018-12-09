import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Home.view.styles';
import Login from './Login/Login.component';
import BookingMenu from './BookingMenu/BookingMenu.component';
import BannerList from './BannerList/BannerList.component';

class HomeView extends Component {
  onLogin = () => {};

  onPressFlight = () => {};

  render() {
    return (
      <ScrollView style={styles.container}>
        <Login onPress={this.onLogin} />
        <BookingMenu onPressFlight={this.onPressFlight} />
        <BannerList />
      </ScrollView>
    );
  }
}

HomeView.propTypes = {};
export default HomeView;
