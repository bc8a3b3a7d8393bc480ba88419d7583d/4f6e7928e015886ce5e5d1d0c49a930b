import React from 'react';
import { FlatList, Image, View } from 'react-native';
import PropTypes from 'prop-types';

import BannerItem from './BannerItem.component';
import BannerHeader from './BannerHeader.component';

import styles, {
  setGridStyleIfSectionTypeIsGrid,
} from './BannerItemList.component.styles';
import Constants from './Constants';

class BannerItemList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  onPress = () => {};

  keyExtractor = item => item.id;

  renderItem = ({ item, index }) => {
    const { id } = item;
    const { data, itemStyle } = this.props;
    const isLastItem = index === data.length - 1;
    return (
      <BannerItem
        isLastItem={isLastItem}
        key={id}
        onPress={this.onPress}
        itemStyle={itemStyle}
        data={item}
      />
    );
  };

  renderSectionBackgroundImage = background =>
    background && (
      <Image
        source={{ uri: background }}
        style={{
          width: '100%',
          height: '120%',
          position: 'absolute',
        }}
      />
    );

  renderHeader = () => {
    const { title, subTitle, itemStyle } = this.props;
    const { titleColor, subtitleColor } = itemStyle;
    return (
      <BannerHeader
        title={title}
        subTitle={subTitle}
        titleColor={titleColor}
        subTitleColor={subtitleColor}
      />
    );
  };

  renderList = () => {
    const { data, itemStyle } = this.props;
    const { type: sectionType } = itemStyle;
    return (
      <FlatList
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={[styles.list, setGridStyleIfSectionTypeIsGrid(sectionType)]}
        horizontal={sectionType !== Constants.SECTION_TYPES.GRID}
        data={data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  };

  render() {
    const { itemStyle } = this.props;
    const {
      properties: { background },
    } = itemStyle;
    return (
      <View style={styles.container}>
        {this.renderSectionBackgroundImage(background)}
        {this.renderHeader()}
        {this.renderList()}
      </View>
    );
  }
}

BannerItemList.defaultProps = {
  subTitle: '',
};

BannerItemList.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,

  itemStyle: PropTypes.shape({
    properties: PropTypes.shape({
      visibleItems: PropTypes.string,
      ratio: PropTypes.string.isRequired,
    }).isRequired,
    titleColor: PropTypes.string.isRequired,
    subtitleColor: PropTypes.string,
    type: PropTypes.string.isRequired,
  }).isRequired,

  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      linkType: PropTypes.string.isRequired,
      attributes: PropTypes.shape({
        title: PropTypes.string,
        ribbonText: PropTypes.string,
        iconImage: PropTypes.string,
        subtitle: PropTypes.string,
        backgroundImage: PropTypes.string.isRequired,
        cornerLabelText: PropTypes.string,
      }).isRequired,
      style: PropTypes.shape({
        properties: PropTypes.shape({
          textPlacement: PropTypes.string,
          overlay: PropTypes.bool,
          textVerticalAlignment: PropTypes.string,
          textHorizontalAlignment: PropTypes.string,
          titleColor: PropTypes.string,
          subtitleColor: PropTypes.string,
          additionalTextColor: PropTypes.string,
        }).isRequired,
      }).isRequired,
    }),
  ).isRequired,
};

export default BannerItemList;
