'use client';
import React from 'react';
import styles from './navigation.module.scss';
import DesktopNavigation from './components/desktop/desktop';
import MobileNavigation from './components/mobile/mobile';
import { useSession } from 'next-auth/react';

const Navigation: React.FC = () => {
  const { data: session } = useSession();

  const authItem = session
    ? {
        href: '/login',
        text: 'Logout',
      }
    : {
        href: '/login',
        text: 'Login',
      };

  const items = {
    game: [{ href: '/game', text: 'Play' }],
    learn: [
      { href: '/', text: 'Story' },
      { href: '/', text: 'Classes' },
      { href: '/', text: 'Races' },
      { href: '/', text: 'World' },
    ],
    github: [
      {
        href: 'https://github.com/codyroberts/talesofawizard-website/',
        text: 'Website',
      },
      { href: 'https://github.com/codyroberts/talesofawizard/', text: 'Game' },
    ],
    community: [
      { href: 'https://discord.gg/rjX2JbYAVR', text: 'Discord' },
      { href: '/', text: 'Leaderboards' },
      authItem,
    ],
  };

  const menus = [
    { header: 'Game', items: items.game },
    { header: 'Learn', items: items.learn },
    { header: 'Github', items: items.github },
    { header: 'Community', items: items.community },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.desktop}>
        <DesktopNavigation menus={menus} />
      </div>
      <div className={styles.mobile}>
        <MobileNavigation menus={menus} />
      </div>
    </div>
  );
};

export default Navigation;
