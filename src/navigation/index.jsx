import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';

import { getUser } from '../store/actions/user';
import { AppNavigation } from './AppNavigation';
import { LoginNavigation } from './LoginNavigation';

const RootNavigation = ({ getUser, user }) => {
  useEffect(() => {
    getUser().then(console.log(user));
  }, []);

  return !user ? <AppNavigation /> : <LoginNavigation />; // TODO reverse for testing
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation);
