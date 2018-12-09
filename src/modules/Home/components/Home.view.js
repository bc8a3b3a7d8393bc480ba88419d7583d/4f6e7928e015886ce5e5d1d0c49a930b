import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Home.view.styles';
import Login from './Login/Login.component';
import BookingMenu from './BookingMenu/BookingMenu.component';
import BannerList from './BannerList/BannerList.component';

class HomeView extends Component {
  onLogin = () => {};

  onPressFlight = () => {};

  render() {
    const { data } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Login onPress={this.onLogin} />
        <BookingMenu onPressFlight={this.onPressFlight} />
        <BannerList data={data} />
      </ScrollView>
    );
  }
}

HomeView.propTypes = {
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
      ),
    }),
  ).isRequired,
};
export default HomeView;
