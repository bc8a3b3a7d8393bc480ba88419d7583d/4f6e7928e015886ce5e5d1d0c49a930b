import React from 'react';
import { Text, ViewPropTypes, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import R from 'ramda';

import styles from './IntroductionPage.component.styles';
import { OnBoardingImages } from '../../../../assets/images';

import Button from '../../../../components/Button/Button.component';

const IntroductionPage = ({
  data: { title, image, text, button },
  onPress,
}) => (
  <View style={styles.container}>
    <Image
      source={OnBoardingImages[image]}
      style={styles.image}
      resizeMode={Image.resizeMode.contain}
    />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.text}>{text}</Text>
    {R.path(['title'], button) && (
      <Button
        containerStyle={button.style}
        title={button.title}
        onPress={onPress}
      />
    )}
  </View>
);

IntroductionPage.defaultProps = {
  onPress: () => {},
};

IntroductionPage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    button: PropTypes.shape({
      title: PropTypes.string.isRequired,
      style: ViewPropTypes.style,
    }),
  }).isRequired,
  onPress: PropTypes.func,
};

export default IntroductionPage;
