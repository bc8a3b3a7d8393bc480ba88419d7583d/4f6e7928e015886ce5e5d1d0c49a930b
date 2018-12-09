import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import styles from './BannerList.component.styles';
import data from '../../Home.data';
import BannerItemList from './BannerItemList.component';

class BannerList extends React.PureComponent {
  keyExtractor = item => item.sectionId;

  renderItem = ({ item }) => {
    const { items, style, sectionId, title, subtitle: subTitle } = item;
    return (
      <BannerItemList
        key={sectionId}
        title={title}
        subTitle={subTitle}
        data={items}
        itemStyle={style}
      />
    );
  };

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.containerContentStyle}
        renderItem={this.renderItem}
        data={data}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

BannerList.defaultProps = {};

BannerList.propTypes = {
  // data: PropTypes.arrayOf()
};

export default BannerList;
