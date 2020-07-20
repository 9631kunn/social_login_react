import React from 'react';

import { useAuth } from 'gatsby-theme-firebase';

import LogoutButton from '../components/LogoutButton';

const Profile = () => {
  const { isLoading, isLoggedIn, profile } = useAuth();

  return (
    <>
      {isLoading && <p>Loading..</p>}
      {isLoggedIn && (
        <>
          <p>お名前: {profile.displayName}</p>
          <p>最終ログイン日時: {profile.metadata.lastSignInTime}</p>
          <p>
            <img src={profile.photoURL} width="150" />
          </p>
          <LogoutButton />
        </>
      )}
    </>
  );
};

export default Profile;
