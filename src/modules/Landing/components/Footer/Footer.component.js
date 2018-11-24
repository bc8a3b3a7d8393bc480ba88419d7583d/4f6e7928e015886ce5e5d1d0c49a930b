import React from 'react';
import { View } from 'react-native';

import Button from '../../../../components/Button/Button.component';
import { translateWithNamespace } from '../../../../i18n';
import styles from './Footer.component.styles';

const i18n = translateWithNamespace('landing.footer');

const Footer = () => (
  <View style={styles.container}>
    <Button title={i18n('continueButton')} />
  </View>
);

export default Footer;
