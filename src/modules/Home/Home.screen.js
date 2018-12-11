import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/Entypo';
import { actions as HomeActions } from './Home.reducer';
import HomeView from './components/Home.view';

import i18n from '../../i18n';
import { HeaderButton } from '../Navigation/components/Header/HeaderButton/HeaderButton.component';
import { COLORS } from '../../themes';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: i18n.t('navigation.homeNavigator.home'),
    headerLeft: null,
    headerRight: (
      <HeaderButton onPress={navigation.goBack} isRightButton>
        <Icon name="dots-three-horizontal" color={COLORS.white} size={18} />
      </HeaderButton>
    ),
  });

  render() {
    return <HomeView {...this.props} />;
  }
}

const mapStateToProps = state => ({
  data: state.home,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(HomeActions, dispatch);

HomeScreen.propTypes = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
