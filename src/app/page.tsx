import Hero from './components/hero/hero';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}
