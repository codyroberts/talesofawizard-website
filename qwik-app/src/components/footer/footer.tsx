import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {

  return (
    <footer>
      <div class={styles.footerItem}>
        <span>A game by</span> 
        <a href="https://www.github.com/codyroberts" target="_blank" class={styles.footerText}>
          <span class={styles.highlight}> Cody Roberts</span>
        </a>
      </div>
      
      <span class={styles.spacer}>|</span>
      
      <div class={styles.footerItem}>
        <span>Art by </span> 
        <a href="https://rickhershey.myportfolio.com/" target="_blank" class={styles.footerText}>
          <span class={styles.highlight}> Rick Hershey</span>
        </a>
      </div>
    </footer>
  );
});
