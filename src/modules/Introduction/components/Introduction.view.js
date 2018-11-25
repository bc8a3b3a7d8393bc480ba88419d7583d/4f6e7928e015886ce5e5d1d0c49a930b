import React, { Component } from 'react';
import { View } from 'react-native';
import I18n from 'react-native-i18n';
import Swiper from 'react-native-swiper';
import R from 'ramda';

import styles from './Introduction.view.styles';
import { COLORS } from '../../../themes';

import IntroductionPage from './IntroductionPage/IntroductionPage.component';
import IntroductionPagesData from './Introduction.view.data';
import Button from '../../../components/Button/Button.component';
import ScreenView from '../../../components/ScreenView/ScreenView.component';

class IntroductionView extends Component {
  onPressTurnOnNotification = () => {
    // eslint-disable-next-line no-undef
    alert('onPressTurnOnNotification');
  };

  onPressImIn = () => {
    // eslint-disable-next-line no-undef
    alert('onPressImIn');
  };

  onPressSkip = () => {
    // eslint-disable-next-line no-undef
    alert('onPressSkip');
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

export default IntroductionView;
