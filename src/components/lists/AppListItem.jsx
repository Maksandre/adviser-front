import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const AppListItem = ({
  onPress,
  onLongPress,
  disabled,
  opacityStyle,
  children,
}) => {
  return (
    <TouchableOpacity
      style={opacityStyle}
      onLongPress={onLongPress}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
};

export default AppListItem;
