import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import ImgBook from "../../media/OldBook.png?jsx"
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <ul>
          <li>
            <Link href="/play">
              Play
            </Link>
          </li>
          <li>
            <Link href="/learn">
              Learn
            </Link>
          </li>
          <li> 
            <a href="/">
              <ImgBook class={styles.centerPiece} />
            </a>
          </li>
          <li>
            <Link
              href="https://github.com/codyroberts/talesofawizard"
              target="_blank"
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              href="https://discord.gg/rjX2JbYAVR"
              target="_blank"
            >
              Discord
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
