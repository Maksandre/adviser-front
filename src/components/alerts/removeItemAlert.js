import { Alert } from 'react-native';

export const removeItemAlert = (item, onPressDelete) => {
  Alert.alert('Attention!', `You want to delete «${item.name}»?`, [
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
