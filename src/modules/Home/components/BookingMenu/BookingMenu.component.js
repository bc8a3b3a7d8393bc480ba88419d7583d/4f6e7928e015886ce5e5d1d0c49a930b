import React, { PureComponent } from 'react';
import { View } from 'react-native';

import styles from './BookingMenu.component.styles';

import BookingMenuData from './BookingMenu.data';
import BookingMenuItem from './BookingMenuItem.component';

class BookingMenu extends PureComponent {
  constructor(props) {
    super(props);

    this.position = 0;
  }

  onLayout = ({
    nativeEvent: {
      layout: { y, height },
    },
  }) => {
    this.position = y + height;
  };

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
      <View style={styles.container} onLayout={this.onLayout}>
        {BookingMenuData.map(this.renderItem)}
      </View>
    );
  }
}

export default BookingMenu;
