import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppView from '../AppView';
import AppButton from '../buttons/AppButton';
import { COLOR } from '../../constants/colors';
import { AppSectionTitle } from '../text';

const AppModal = ({
  isVisible,
  onClose,
  title,
  firstButton,
  secondButton,
  closeButton,
  closeByX = true,
  children,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <AppView>
        <SafeAreaView style={styles.modalView}>
          <KeyboardAvoidingView behavior="padding" style={styles.content}>
            {closeByX && (
              <TouchableOpacity onPress={onClose} style={styles.xButton}>
                <MaterialCommunityIcons
                  name="close"
                  size={48}
                  color={COLOR.BLACK}
                />
              </TouchableOpacity>
            )}
            {title && <AppSectionTitle>{title}</AppSectionTitle>}
            {children}
          </KeyboardAvoidingView>
          <View style={styles.bottom}>
            {closeButton && (
              <AppButton
                style={{ ...styles.button, backgroundColor: COLOR.GRAY }}
                onPress={onClose}
                title={closeButton.title}
              />
            )}
            {firstButton && (
              <AppButton
                style={styles.button}
                title={firstButton.title}
                onPress={firstButton.onPress}
              />
            )}
            {secondButton && (
              <AppButton
                style={styles.button}
                title={secondButton.title}
                onPress={secondButton.onPress}
              />
            )}
          </View>
        </SafeAreaView>
      </AppView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 4,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  button: {
    flex: 1,
    margin: 6,
  },
  xButton: { alignSelf: 'flex-end', paddingTop: 10 },
});

export default AppModal;
