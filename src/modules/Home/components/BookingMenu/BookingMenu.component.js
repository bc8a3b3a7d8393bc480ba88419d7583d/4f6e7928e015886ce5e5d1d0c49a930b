import React, { PureComponent } from 'react';
import { View } from 'react-native';

import styles from './BookingMenu.component.styles';

import BookingMenuData from './BookingMenu.data';
import BookingMenuItem from './BookingMenuItem.component';

class BookingMenu extends PureComponent {
  renderItem = item => {
    const { props } = this;
    const { title, image, onPress } = item;
    return (
      <BookingMenuItem
        key={title}
        onPress={props[onPress]}
        image={image}
        title={title}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {BookingMenuData.map(this.renderItem)}
      </View>
    );
  }
}

export default BookingMenu;
