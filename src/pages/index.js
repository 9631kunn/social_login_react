import React from 'react';
import { navigate } from 'gatsby';
import { useAuth } from 'gatsby-theme-firebase';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { SocialLogins } from 'gatsby-theme-firebase';

const IndexPage = () => {
  const { isLoading, isLoggedIn, profile } = useAuth();

  return (
    <Layout>
      <SEO title="Home" />

      {!isLoggedIn && (
        <SocialLogins
          onSuccess={(user) => {
            console.log(user);
            navigate('/');
          }}
        />
      )}

      {isLoading && <p>Loading..</p>}
      {isLoggedIn && (
        <>
          <p>お名前: {profile.displayName}</p>
          <p>最終ログイン日時: {profile.metadata.lastSignInTime}</p>
          <p>
            <img src={profile.photoURL} width="150" />
          </p>
        </>
      )}

      {console.log(profile)}
    </Layout>
  );
};

export default IndexPage;
