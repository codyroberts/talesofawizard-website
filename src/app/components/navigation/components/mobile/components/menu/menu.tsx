'use client';

import React, { ReactNode } from 'react';
import styles from './menu.module.scss';

type MenuProps = {
  header: string;
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
};

const Menu: React.FC<MenuProps> = ({ header, children, isOpen, onClick }) => {
  return (
    <div className={`${styles.container}`}>
      <div
        className={styles.header}
        onClick={() => {
          onClick();
        }}
      >
        {header}
      </div>
      <div
        className={`${styles.items} ${isOpen ? styles.open : styles.closed}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Menu;
