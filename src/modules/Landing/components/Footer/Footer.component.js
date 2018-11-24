import React from 'react';

import Button from '../../../../components/Button/Button.component';
import { translateWithNamespace } from '../../../../i18n';

const i18n = translateWithNamespace('landing.footer');

const Footer = () => <Button title={i18n('continueButton')} />;

export default Footer;
