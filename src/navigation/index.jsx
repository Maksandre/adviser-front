import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../store/actions/user';
import { AppNavigation } from './AppNavigation';
import { LoginNavigation } from './LoginNavigation';

const RootNavigation = ({ getUser, user }) => {
  useEffect(() => {
    getUser();
  }, []);

  return user ? <AppNavigation /> : <LoginNavigation />; // TODO reverse for testing
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation);
