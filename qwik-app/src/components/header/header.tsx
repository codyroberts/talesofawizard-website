import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import ImgBook from "../../media/OldBook.png?jsx"

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <ul>
          <li>
            <a
              href="/"
              target="_blank"
            >
              Play
            </a>
          </li>
          <li>
            <a
              href="/"
              target="_blank"
            >
              Learn
            </a>
          </li>
          <li> 
                <ImgBook class={styles.logoImage} />
          </li>
          <li>
            <a
              href="/"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="/"
              target="_blank"
            >
              Discord
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
