import React from 'react';
import {
  View,
  ViewPropTypes,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';

import styles, {
  calculateImageSize,
  setSpacingStyle,
  setStyleIfFullBanner,
  setTitleColor,
} from './BannerItem.component.styles';

import Constants from './Constants';
import { COLORS } from '../../../../themes';

class BannerItem extends React.Component {
  renderIconImage = iconImage =>
    iconImage && <Image style={styles.icon} source={{ uri: iconImage }} />;

  renderTitle = (title, titleColor) =>
    title && (
      <Text style={[styles.title, setTitleColor(titleColor)]}>{title}</Text>
    );

  renderVideoIcon = linkType =>
    linkType === Constants.LINK_TYPES.VIDEO && (
      <View style={styles.videoIcon}>
        <Icon name="playcircleo" color={COLORS.white} size={40} />
      </View>
    );

  render() {
    const { onPress, data, containerStyle, isLastItem, itemStyle } = this.props;
    const {
      linkType,
      attributes: { backgroundImage, title, iconImage },
      style: {
        properties: { titleColor },
      },
    } = data;
    const { type: sectionType } = itemStyle;

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            styles.container,
            setSpacingStyle(isLastItem),
            setStyleIfFullBanner(sectionType),
            containerStyle,
          ]}
        >
          <ImageBackground
            source={{ uri: backgroundImage }}
            style={[styles.image, calculateImageSize(itemStyle, data)]}
            resizeMode={Image.resizeMode.cover}
          >
            {this.renderIconImage(iconImage)}
            {this.renderTitle(title, titleColor)}
            {this.renderVideoIcon(linkType)}
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

BannerItem.defaultProps = {
  containerStyle: {},
  isLastItem: false,
};

BannerItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  containerStyle: ViewPropTypes.style,
  isLastItem: PropTypes.bool,
  itemStyle: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    attributes: PropTypes.shape({
      backgroundImage: PropTypes.string.isRequired,
      title: PropTypes.string,
      iconImage: PropTypes.string,
    }).isRequired,
    style: PropTypes.shape({
      titleColor: PropTypes.string,
    }),
    linkType: PropTypes.string.isRequired,
  }).isRequired,
};

export default BannerItem;
