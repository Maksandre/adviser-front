import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLOR } from '../../constants/colors';
import { BOLD, RADIUS } from '../../constants/commonui';
import { AppText } from '../text';

const ConnectionRequisiteItem = ({ name, onDelete }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{name}</AppText>
      <TouchableOpacity onPress={onDelete}>
        <MaterialCommunityIcons name="close" size={16} color={COLOR.WHITE} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.BLUE,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: RADIUS,
    marginRight: 10,
    marginBottom: 5,
  },
  text: {
    color: COLOR.WHITE,
    fontWeight: BOLD,
    marginRight: 10,
  },
});

export default ConnectionRequisiteItem;
