import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button/Button.component';
import { translateWithNamespace } from '../../../../i18n';
import styles from './Footer.component.styles';

const i18n = translateWithNamespace('flightBooking.footer');

const Footer = ({ onPress }) => (
  <Button
    title={i18n('searchButton')}
    onPress={onPress}
    containerStyle={styles.button}
    titleStyle={styles.buttonTitle}
  />
);

Footer.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Footer;
