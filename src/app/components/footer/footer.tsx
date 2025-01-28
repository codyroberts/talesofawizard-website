import React from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <span>A game by &nbsp;</span>
      <Link href="https://www.codyroberts.net/">Cody Roberts</Link>
      <span>&nbsp; | &nbsp;</span>
      <span>Game art by &nbsp;</span>
      <Link href="https://www.patreon.com/c/krishna_palacio/">
        Krishna Palacio
      </Link>
      <span>&nbsp; | &nbsp;</span>
      <span>Website art by &nbsp;</span>
      <Link href="https://www.patreon.com/StockArt">Rick Hershey</Link>
    </div>
  );
};

export default Footer;
