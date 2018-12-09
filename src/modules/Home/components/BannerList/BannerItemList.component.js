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

  render() {
    const { data, title, subTitle, itemStyle } = this.props;
    const {
      type: sectionType,
      properties: { background },
    } = itemStyle;
    return (
      <View style={styles.container}>
        {background && (
          <Image
            source={{ uri: background }}
            style={{
              width: '100%',
              height: '120%',
              position: 'absolute',
            }}
          />
        )}
        <BannerHeader title={title} subTitle={subTitle} />
        <FlatList
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={[styles.list, setGridStyleIfSectionTypeIsGrid(sectionType)]}
          horizontal={sectionType !== Constants.SECTION_TYPES.GRID}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

BannerItemList.defaultProps = {
  subTitle: '',
};

BannerItemList.propTypes = {
  // onPress: PropTypes.func.isRequired,
  // image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export default BannerItemList;
