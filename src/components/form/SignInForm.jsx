import React from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../../store/actions/user';
import AuthBaseForm from './AuthBaseForm';

const SignInForm = ({ loginUser, style }) => {
  const handleSubmitForm = async (user) => {
    await loginUser(user);
  };

  return (
    <AuthBaseForm
      onSubmit={handleSubmitForm}
      buttonTitle="Log In"
      style={style}
    />
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(SignInForm);
