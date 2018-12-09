import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import styles from './BannerList.component.styles';
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
    const { data } = this.props;
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      sectionId: PropTypes.string.isRequired,
      sectionName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string,
      iconTitle: PropTypes.string,
      link: PropTypes.string,
      style: PropTypes.shape({
        properties: PropTypes.shape({
          visibleItems: PropTypes.string,
          ratio: PropTypes.string.isRequired,
        }).isRequired,
        titleColor: PropTypes.string.isRequired,
        subtitleColor: PropTypes.string,
        type: PropTypes.string.isRequired,
      }).isRequired,
      items: PropTypes.arrayOf(
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
    }),
  ).isRequired,
};

export default BannerList;
