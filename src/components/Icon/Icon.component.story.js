import React from 'react';
import { FlatList, Text } from 'react-native';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import { config } from '../../assets/fontello';

import Icon from './Icon.component';

const ListOfIcons = () => (
  <FlatList
    renderItem={({ item }) => (
      <Text style={{ color: 'black', fontSize: 30 }}>
        <Icon name={item.css} color="black" size={32} />
        {` ${item.css}`}
      </Text>
    )}
    data={config.glyphs}
    keyExtractor={item => item.css}
  />
);

storiesOf('Fontello icons', module).add('all icons', () => <ListOfIcons />);
