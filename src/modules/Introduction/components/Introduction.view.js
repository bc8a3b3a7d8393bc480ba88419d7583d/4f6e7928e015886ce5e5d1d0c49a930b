import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import I18n from 'react-native-i18n';
import Swiper from 'react-native-swiper';
import R from 'ramda';
import PushNotification from 'react-native-push-notification';

import styles from './Introduction.view.styles';
import { COLORS } from '../../../themes';

import IntroductionPage from './IntroductionPage/IntroductionPage.component';
import IntroductionPagesData from './Introduction.view.data';
import Button from '../../../components/Button/Button.component';
import ScreenView from '../../../components/ScreenView/ScreenView.component';
import { Routes } from '../../Navigation/Navigation.constant';

class IntroductionView extends Component {
  onPressTurnOnNotification = () => {
    PushNotification.requestPermissions();
  };

  onPressImIn = () => {
    // eslint-disable-next-line no-undef
    this.navigateToHome();
  };

  onPressSkip = () => {
    this.navigateToHome();
  };

  navigateToHome = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate(Routes.HomeNavigator.Home);
  };

  renderSwiper = () => (
    <Swiper
      style={styles.wrapper}
      loop={false}
      dotColor={COLORS.black300}
      activeDotColor={COLORS.white}
    >
      {IntroductionPagesData.map(this.renderPage)}
    </Swiper>
  );

  renderPage = item => {
    const handlerName = R.path(['button', 'handler'], item);
    const defaultToFunction = R.defaultTo(() => {});
    const handler = defaultToFunction(this[handlerName]);

    return <IntroductionPage data={item} key={item.id} onPress={handler} />;
  };

  render() {
    return (
      <ScreenView style={styles.container}>
        {this.renderSwiper()}
        <View style={styles.buttonContainer}>
          <Button
            containerStyle={styles.skipButton}
            title={I18n.t('onboarding.button.skip')}
            onPress={this.onPressSkip}
          />
        </View>
      </ScreenView>
    );
  }
}

IntroductionView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default IntroductionView;
