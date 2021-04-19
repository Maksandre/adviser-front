import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { BOLD } from '../../constants/commonui';

import AppConnectButton from '../buttons/AppConnectButton';
import ConnectionModal from '../modal/ConnectionModal.jsx';
import { AppText } from '../text';
import ConnectionRequisiteItem from './ConnectionRequisiteItem';

const ConnectionRequisite = ({
  title,
  buttonText,
  elements,
  selectedElements,
  lockedElements,
  onSelect,
  onDelete,
  multiple,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
      <AppText style={styles.title}>{title}</AppText>
      <View style={[styles.buttons]}>
        {selectedElements.map((element) => {
          return (
            <ConnectionRequisiteItem
              name={element.name}
              key={element.id}
              onDelete={() => onDelete(element)}
            />
          );
        })}
        {(multiple || selectedElements.length === 0) && (
          <AppConnectButton
            style={styles.button}
            text={` ${buttonText}`}
            onPress={() => {
              setModalVisible(true);
            }}
          />
        )}
      </View>
      <ConnectionModal
        data={elements}
        title={title}
        selectedData={selectedElements}
        lockedData={lockedElements}
        isVisible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
        onPressItem={(item) => {
          onSelect(item);
          if (!multiple) {
            setModalVisible(false);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 20,
  },
  title: {
    marginBottom: 20,
    fontWeight: BOLD,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  button: {
    marginTop: 5,
  },
});

export default ConnectionRequisite;
