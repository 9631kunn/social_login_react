import React from 'react';

import { Router } from '@reach/router';

import Layout from '../components/Layout';
import Profile from '../modules/Profile';

const User = () => {
  return (
    <Layout>
      <Router>
        <Profile path="/user/:uid" />
      </Router>
    </Layout>
  );
};

export default User;
