import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import ImgCastle from "../../media/castle.png?jsx";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <ImgCastle class={styles["hero-image"]} alt="Image of a Castle" />
      <h1>
        The wizard's grimoire
        <br />
        has been opened.
      </h1>
      <p>Will your story be told?</p>
    </div>
  );
});
