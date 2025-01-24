import React from 'react';
import styles from './hero.module.scss';

const Hero: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>The wizard&apos;s grimoire</h1>
      <h1>has been opened.</h1>
      <p>Will your story be told?</p>
    </div>
  );
};

export default Hero;
