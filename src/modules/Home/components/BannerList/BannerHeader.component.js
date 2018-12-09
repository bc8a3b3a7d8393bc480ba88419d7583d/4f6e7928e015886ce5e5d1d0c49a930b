import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './BannerHeader.component.styles';

const BannerHeader = ({ title, subTitle }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>{title}</Text>
    {subTitle && <Text style={styles.headerDescription}>{subTitle}</Text>}
  </View>
);

BannerHeader.defaultProps = {
  subTitle: '',
};

BannerHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export default BannerHeader;
