import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import TabButton from './TabButton/TabButton.component';
import styles from './BottomTabBar.component.styles';

import TabRoutes from './BottomTabBar.data';

class BottomTabBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: TabRoutes[0].route,
    };
  }

  onSwitchTab = tabKey => {
    this.setState({
      selectedTab: tabKey,
    });
    const {
      navigation: { navigate },
    } = this.props;
    navigate({ routeName: tabKey });
  };

  renderTabBarItem = item => {
    const { selectedTab } = this.state;
    const { route, title } = item;
    const selected = route === selectedTab;
    return (
      <TabButton
        key={route}
        route={route}
        selected={selected}
        title={title}
        onPress={this.onSwitchTab}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {TabRoutes.map(this.renderTabBarItem)}
      </View>
    );
  }
}

BottomTabBar.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default BottomTabBar;
