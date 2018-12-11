import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles, {
  setSubTitleColor,
  setTitleColor,
} from './BannerHeader.component.styles';

const BannerHeader = ({ title, subTitle, titleColor, subTitleColor }) => (
  <View style={styles.headerContainer}>
    <Text style={[styles.headerTitle, setTitleColor(titleColor)]}>{title}</Text>
    {subTitle && (
      <Text style={[styles.headerDescription, setSubTitleColor(subTitleColor)]}>
        {subTitle}
      </Text>
    )}
  </View>
);

BannerHeader.defaultProps = {
  subTitle: '',
  titleColor: '',
  subTitleColor: '',
};

BannerHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  titleColor: PropTypes.string,
  subTitleColor: PropTypes.string,
};

export default BannerHeader;
