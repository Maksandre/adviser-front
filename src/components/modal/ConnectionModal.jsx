import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { COLOR } from '../../constants/colors';
import { RADIUS } from '../../constants/commonui';
import AppDraggableList from '../lists/AppDraggableList';
import AppListItem from '../lists/AppListItem';
import EconomyVisible from '../lists/economy/EconomyVisible';
import AppModal from './AppModal';

const ConnectionModal = ({
  isVisible,
  title,
  data,
  selectedData,
  lockedData,
  onClose,
  onPressItem,
}) => {
  const renderItem = ({ item }) => {
    const isLocked = lockedData?.some((element) => element.id === item.id);
    const isSelected = selectedData?.some((element) => element.id === item.id);

    const Icon = () =>
      isLocked ? (
        <MaterialIcons
          name="lock"
          size={20}
          color={COLOR.WHITE}
          style={styles.icon}
        />
      ) : (
        <MaterialIcons
          name={isSelected ? 'check-box' : 'check-box-outline-blank'}
          size={20}
          color={COLOR.WHITE}
          style={styles.icon}
        />
      );

    const style = [styles.opacity, isLocked && styles.opacityLocked];

    return (
      <AppListItem
        disabled={isLocked}
        onPress={() => onPressItem(item)}
        opacityStyle={style}
      >
        <EconomyVisible
          left={item.name}
          right={item.amount + ' $'}
          Icon={Icon}
        />
      </AppListItem>
    );
  };

  return (
    <AppModal
      isVisible={isVisible}
      onClose={onClose}
      title={title}
      closeByX={false}
      firstButton={{ title: 'OK', onPress: onClose }}
    >
      <AppDraggableList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </AppModal>
  );
};

const styles = StyleSheet.create({
  opacity: {
    backgroundColor: COLOR.BLUE,
    borderRadius: RADIUS,
    marginTop: 10,
  },
  opacityLocked: {
    backgroundColor: COLOR.GRAY,
  },
  icon: { marginRight: 5 },
});

export default ConnectionModal;
