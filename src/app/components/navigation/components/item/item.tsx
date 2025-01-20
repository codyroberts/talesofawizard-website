import React, { ReactNode } from 'react';
import styles from './item.module.scss';
import Link from 'next/link';

type ItemProps = { 
    href: string,
    text: string
};

const Item: React.FC<ItemProps> = ({ href, text }) => {
  return (
    <Link href={href} className={styles.item}>{text}</Link>
  );
};

export default Item;