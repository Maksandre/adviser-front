import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const AppListItem = ({ onPress, onLongPress, opacityStyle, children }) => {
  return (
    <TouchableOpacity
      style={opacityStyle}
      onLongPress={onLongPress}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default AppListItem;
