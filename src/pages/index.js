import React from 'react';
import { navigate, Link } from 'gatsby';
import { useAuth } from 'gatsby-theme-firebase';

import Layout from '../components/Layout';
import LogoutButton from '../components/LogoutButton';
import { SocialLogins } from 'gatsby-theme-firebase';

const IndexPage = () => {
  const { isLoggedIn, profile } = useAuth();

  return (
    <Layout>
      {!isLoggedIn && (
        <SocialLogins
          onSuccess={(user) => {
            navigate(`/user/${user.user.uid}`);
          }}
        />
      )}
      {isLoggedIn && (
        <>
          <p>ログイン済みです</p>
          {console.log(profile)}
          <Link to={`/user/${profile.uid}`}>自分のページへ</Link>
          <LogoutButton />
        </>
      )}
    </Layout>
  );
};

export default IndexPage;
