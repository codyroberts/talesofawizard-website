import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { Application, Assets } from "pixi.js";

export default component$(() => {
  useVisibleTask$(async () => {
    const app = new Application();

    const gameDIV = document.getElementById("game");

    await app.init({ background: "#E6EEF7", resizeTo: gameDIV! });
    gameDIV.appendChild(app.canvas);
  });

  return <div id="game" class="w-game h-game" />;
});
