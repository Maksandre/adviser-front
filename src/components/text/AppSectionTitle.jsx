import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR } from '../../constants/colors';
import { BOLD } from '../../constants/commonui';
import AppBaseText from './AppBaseText';

export default AppSectionTitle = (props) => {
  return (
    <SafeAreaView>
      <AppBaseText style={{ ...styles.text, ...props.style }}>
        {props.children}
      </AppBaseText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: BOLD,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: COLOR.WHITE,
  },
});
