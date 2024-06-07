import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { Engine, DisplayMode } from "excalibur";

export default component$(() => {
  useVisibleTask$(() => {
    const game = new Engine({
      width: 800,
      height: 600,
      canvasElementId: "game",
      displayMode: DisplayMode.FitContainer,
    });

    game.start();
  });

  return (
    <div class="w-game h-game flex flex-col flex-nowrap items-center justify-center align-middle md:gap-14">
      <canvas id="game"></canvas>
    </div>
  );
});
