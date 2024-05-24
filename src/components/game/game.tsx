import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { Application } from "pixi.js";

export default component$(() => {
  useVisibleTask$(async () => {
    // Create a PixiJS application.
    const app = new Application();

    // Intialize the application.
    await app.init({ background: "#E6EEF7" });

    const gameDIV = document.getElementById("game");
    // Then adding the application's canvas to the DOM body.
    gameDIV.appendChild(app.canvas);
  });

  return <div id="game" />;
});
