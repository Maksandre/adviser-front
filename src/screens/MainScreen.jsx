import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { logOutUser } from '../store/actions/user';

export const MainScreen = ({ logOutUser }) => {
  return (
    <View style={styles.container}>
      <Text>Assets And Liabilities Screen</Text>
      <Button
        title="Log Out"
        onPress={() => {
          logOutUser();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapDispatchToProps = { logOutUser };

export default connect(null, mapDispatchToProps)(MainScreen);
