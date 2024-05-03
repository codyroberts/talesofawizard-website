import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {

  return (
    <footer>
      <div class="container">
        <a href="https://www.github.com/codyroberts" target="_blank" class={styles.anchor}>
          <span>A game by</span> <span class={styles.highlight}>Cody Roberts</span>
          <span class={styles.spacer}>|</span>
          <span>Art by </span> <span class={styles.highlight}>Rick Hershey</span>
        </a>
      </div>
    </footer>
  );
});
