import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { COLOR } from '../../constants/colors';
import { OPACITY, RADIUS } from '../../constants/commonui';
import { AppText } from '../text';

const AppButton = (props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.containerPressed,
        props.style,
      ]}
      onPress={props.onPress}
      disabled={!props.isLoaded}
    >
      <AppText style={styles.text}>{props.title}</AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.BLUE,
    paddingVertical: 10,
    borderRadius: RADIUS,
  },
  containerPressed: {
    opacity: OPACITY,
  },
  text: {
    textAlign: 'center',
    color: COLOR.WHITE,
  },
});

function mapStateToProps(state) {
  return {
    isLoaded: state.apiCallsInProgress === 0,
  };
}

export default connect(mapStateToProps, null)(AppButton);
