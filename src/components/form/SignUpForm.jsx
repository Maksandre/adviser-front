import React from 'react';
import { connect } from 'react-redux';

import { createUser, loginUser } from '../../store/actions/user';
import AuthBaseForm from './AuthBaseForm';

const SignUpForm = ({ createUser, loginUser, style }) => {
  const handleSubmitForm = async (user) => {
    if (await createUser(user)) {
      await loginUser(user);
    }
  };

  return (
    <AuthBaseForm
      onSubmit={handleSubmitForm}
      buttonTitle="Create account"
      style={style}
    />
  );
};

const mapDispatchToProps = {
  createUser,
  loginUser,
};

export default connect(null, mapDispatchToProps)(SignUpForm);
