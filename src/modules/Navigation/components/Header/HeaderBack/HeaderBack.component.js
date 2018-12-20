import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import COLORS from '../../../../../themes/colors';
import HeaderButtonWrapper from '../HeaderButton/HeaderButton.component';

const HeaderBack = ({ navigation: { goBack } }) => (
  <HeaderButtonWrapper onPress={goBack}>
    <Icon name="ios-arrow-round-back" color={COLORS.white} size={30} />
  </HeaderButtonWrapper>
);

HeaderBack.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export { HeaderBack };
export default withNavigation(HeaderBack);
