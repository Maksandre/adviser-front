import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { COLOR } from '../constants/colors';
import Loader from './Loader';

const AppView = (props) => {
  return (
    <ScrollView
      contentContainerStyle={{ ...styles.container, ...props.style }}
      keyboardShouldPersistTaps="handled"
    >
      {props.children}
      {!props.isLoaded && <Loader />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: 30,
  },
});

function mapStateToProps(state) {
  return {
    isLoaded: state.apiCallsInProgress === 0,
  };
}

export default connect(mapStateToProps, null)(AppView);
