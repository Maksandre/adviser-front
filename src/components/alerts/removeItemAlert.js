import { Alert } from 'react-native';

export const removeItemAlert = (item, onPressDelete, message) => {
  Alert.alert('Attention!', message || `You want to delete «${item.name}»?`, [
    { text: 'Cancel', style: 'cancel' },
    {
      text: 'Delete',
      style: 'destructive',
      onPress: () => {
        onPressDelete();
      },
    },
  ]);
};
