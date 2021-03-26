import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Collapsible from 'react-native-collapsible';

import EconomyListItem from './EconomyListItem';

const EconomyCollapsibleListItem = ({ item, drag, isActive }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <View>
      <EconomyListItem
        item={item}
        drag={drag}
        isActive={isActive}
        onPress={() => setCollapsed(!collapsed)}
      />
      <Collapsible collapsed={collapsed}>
        <Text>collapsed</Text>
      </Collapsible>
    </View>
  );
};

export default EconomyCollapsibleListItem;
