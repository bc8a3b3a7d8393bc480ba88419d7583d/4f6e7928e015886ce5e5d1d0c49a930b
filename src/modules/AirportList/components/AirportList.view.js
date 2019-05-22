import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Search from 'react-native-search-box';

import styles from './AirportList.view.styles';
import NavigationBar from '../../Navigation/components/Header/NavigationBar/NavigationBar.component';
import { COLORS } from '../../../themes';

class AirportListView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar>
          <Search backgroundColor={COLORS.background} />
        </NavigationBar>
      </View>
    );
  }
}

AirportListView.propTypes = {};
export default AirportListView;
