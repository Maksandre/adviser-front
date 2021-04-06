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
    if (!collapsed) {
      setCollapsed(true);
      setTimeout(() => onLongPress(), 330);
    } // because of animation duration of Collapsible part is 300ms d-n-d should wait a little bit more
    else onLongPress();
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
