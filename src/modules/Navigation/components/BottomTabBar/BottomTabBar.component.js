import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import TabButton from './TabButton/TabButton.component';
import styles from './BottomTabBar.component.styles';

import TabRoutes from './BottomTabBar.data';
import { getCurrentRoute } from '../../Navigation.selector';
import { showShowTabBarWithRoute } from './BottomTabBar.config';

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
    const { route, title, icon } = item;
    const selected = route === selectedTab;
    return (
      <TabButton
        key={route}
        route={route}
        selected={selected}
        title={title}
        icon={icon}
        onPress={this.onSwitchTab}
      />
    );
  };

  render() {
    const { navigation } = this.props;
    const currentRoute = getCurrentRoute(navigation);
    if (!showShowTabBarWithRoute(currentRoute)) return <View />;

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
