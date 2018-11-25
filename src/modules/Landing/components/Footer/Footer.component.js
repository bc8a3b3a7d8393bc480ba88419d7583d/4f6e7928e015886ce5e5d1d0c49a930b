import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button/Button.component';
import { translateWithNamespace } from '../../../../i18n';
import styles from './Footer.component.styles';

const i18n = translateWithNamespace('landing.footer');

const Footer = ({ onPress }) => (
  <View style={styles.container}>
    <Button title={i18n('continueButton')} onPress={onPress} />
  </View>
);

Footer.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Footer;
