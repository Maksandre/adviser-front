import React, { useState } from 'react';
import { View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import AppListItem from './AppListItem';

const AppCollapsibleListItem = ({
  onLongPress,
  opacityStyle,
  expandedOpacityStyle,
  children,
}) => {
  const [collapsed, setCollapsed] = useState(true);

  const style = collapsed
    ? opacityStyle
    : { ...opacityStyle, ...expandedOpacityStyle };

  const handleLongPress = () => {
    setCollapsed(true);
    setTimeout(() => onLongPress(), 320); // because of duration of Collapsible part is 300ms dnd should wait a little bit more
  };

  return (
    <View>
      <AppListItem
        onPress={() => setCollapsed(!collapsed)}
        onLongPress={handleLongPress}
        opacityStyle={style}
      >
        {children[0]}
      </AppListItem>
      <Collapsible collapsed={collapsed}>{children[1]}</Collapsible>
    </View>
  );
};

export default AppCollapsibleListItem;
