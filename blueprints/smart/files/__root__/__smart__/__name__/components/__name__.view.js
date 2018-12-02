import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './<%= pascalEntityName %>.view.styles';

class <%= pascalEntityName %>View extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

<%= pascalEntityName %>View.propTypes = {

};
export default <%= pascalEntityName %>View

