'use client';

import { signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import styles from './button.module.scss';
import React from 'react';

type Props = {
  session: Session | null;
  provider?: string;
};

const AuthenticationButton: React.FC<Props> = ({ session, provider }) => {
  const handleAuthAction = () => {
    if (session) {
      signOut({ callbackUrl: '/' });
    } else {
      if (provider == 'Github') {
        signIn('github', { prompt: 'login', callbackUrl: '/profile' });
      }
      if (provider == 'Google') {
        signIn('google', { prompt: 'login', callbackUrl: '/profile' });
      }
    }
  };

  const buttonText = session ? 'Logout' : `Login with ${provider}`;

  return (
    <button className={styles.button} onClick={handleAuthAction} type="button">
      {buttonText}
    </button>
  );
};

export default AuthenticationButton;
