'use client';

import React, { ReactNode, useState } from 'react';
import styles from './menu.module.scss';

type MenuProps = {
  header: string;
  children: ReactNode;
};

const Menu: React.FC<MenuProps> = ({ header, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.container}`}>
      <div
        className={styles.header}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {header}
      </div>
      <div
        className={`${styles.items} ${open ? styles.open : styles.closed}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {children}
      </div>
    </div>
  );
};

export default Menu;
