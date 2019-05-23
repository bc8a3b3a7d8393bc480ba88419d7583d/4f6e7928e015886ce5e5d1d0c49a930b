import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Login.component.styles';
import { OnBoardingImages } from '../../../../assets/images';

import { translateWithNamespace } from '../../../../i18n';

const i18n = translateWithNamespace('home.login');

const Login = ({ onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <Image
        source={OnBoardingImages.page1}
        style={styles.avatar}
        resizeMode="cover"
      />
      <View style={styles.rightColumn}>
        <Text style={styles.title}>{i18n('title')}</Text>
        <Text style={styles.text}>{i18n('text')}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

Login.defaultProps = {
  onPress: () => {},
};

Login.propTypes = {
  onPress: PropTypes.func,
};

export default Login;
