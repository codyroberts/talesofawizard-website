'use client';
import React, { useState } from 'react';
import Menu from './components/menu/menu';
import Item from './components/item/item';
import styles from './mobile.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type MenuItem = {
  href: string;
  text: string;
};

type Menu = {
  header: string;
  items: MenuItem[];
};

type Props = {
  menus: Menu[];
};

const MobileNavigation: React.FC<Props> = ({ menus }) => {
  const [open, setOpen] = useState(false);

  const handleBookClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.menus} ${open ? styles.show : ''}`}>
        {menus.map((menu: Menu, menuIndex: number) => {
          return (
            <div key={menuIndex}>
              <Menu header={menu.header}>
                {menu.items.map((item: MenuItem, itemIndex: number) => (
                  <Item key={itemIndex} href={item.href} text={item.text} />
                ))}
              </Menu>
            </div>
          );
        })}
      </div>
      <Link href="/">
        <Image
          src="/images/OldBook.png"
          width={2100}
          height={2100}
          alt="Home Button"
          className={styles.image}
          onClick={handleBookClick}
        />
      </Link>
    </div>
  );
};

export default MobileNavigation;
