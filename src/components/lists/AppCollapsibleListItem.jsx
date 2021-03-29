import React, { useState } from 'react';
import { View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import AppListItem from './AppListItem';

const AppCollapsibleListItem = ({ onLongPress, opacityStyle, children }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <View>
      <AppListItem
        onPress={() => setCollapsed(!collapsed)}
        onLongPress={onLongPress}
        opacityStyle={opacityStyle}
      >
        {children[0]}
      </AppListItem>
      <Collapsible collapsed={collapsed}>{children[1]}</Collapsible>
    </View>
  );
};

export default AppCollapsibleListItem;
