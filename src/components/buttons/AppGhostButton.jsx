import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { COLOR } from '../../constants/colors';
import { RADIUS } from '../../constants/commonui';

const AppGhostButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.opacity}>
      <MaterialIcons name="add" size={36} color={COLOR.ORANGE} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  opacity: {
    borderWidth: 2,
    borderColor: COLOR.ORANGE,
    borderRadius: RADIUS,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
});

export default AppGhostButton;
