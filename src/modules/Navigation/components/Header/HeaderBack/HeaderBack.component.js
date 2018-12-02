import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import IconSet from '../../../../../components/Icon/Icon.component';
import COLORS from '../../../../../themes/colors';
import HeaderButtonWrapper from '../HeaderButton/HeaderButton.component';

const HeaderBack = ({ navigation: { goBack } }) => (
  <HeaderButtonWrapper onPress={goBack}>
    <IconSet name="arrow-left" color={COLORS.white} />
  </HeaderButtonWrapper>
);

HeaderBack.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export { HeaderBack };
export default withNavigation(HeaderBack);
