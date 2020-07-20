import React from 'react';
import { navigate } from 'gatsby';

import { auth } from 'gatsby-theme-firebase';

const LogoutButton = () => {
  return (
    <button
      onClick={() => {
        auth.signOut();
        navigate('/');
      }}
    >
      ログアウト
    </button>
  );
};

export default LogoutButton;
