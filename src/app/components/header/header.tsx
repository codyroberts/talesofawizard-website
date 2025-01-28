import React from 'react';
import Navigation from '../navigation/navigation';
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navigation />
    </div>
  );
};

export default Header;
