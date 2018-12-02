import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Home.view.styles';

class HomeView extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

HomeView.propTypes = {};
export default HomeView;
