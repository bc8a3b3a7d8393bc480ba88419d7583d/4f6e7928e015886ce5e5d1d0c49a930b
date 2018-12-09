import React from 'react';
import { View, Animated, Image } from 'react-native';
import { METRICS } from '../../../../themes';

import styles from './BookingMenuShortcut.component.styles';
import { defaultMenuItems } from './BookingMenu.data';

import HomeImages from '../../../../assets/images/home';

class BookingMenuShortcut extends React.PureComponent {
  constructor(props) {
    super(props);

    this.containerHeight = 40;
    this.hidePosition = -(METRICS.spacing.normal + this.containerHeight);
    this.showPosition = METRICS.spacing.normal;
    this.state = {
      animation: new Animated.Value(this.hidePosition),
    };
  }

  startAnimation = show => {
    const top = show ? this.showPosition : this.hidePosition;
    const { animation } = this.state;
    animation.setValue(top);
    Animated.timing(animation, {
      toValue: top,
    }).start();
  };

  renderItem = item => (
    <View style={styles.itemContainer} key={item.title}>
      <Image source={HomeImages[`${item.image}-small`]} style={styles.icon} />
    </View>
  );

  render() {
    const { animation } = this.state;
    return (
      <Animated.View
        style={[
          styles.container,
          {
            top: animation,
          },
        ]}
      >
        {defaultMenuItems.map(this.renderItem)}
      </Animated.View>
    );
  }
}

BookingMenuShortcut.propTypes = {};

export default BookingMenuShortcut;
