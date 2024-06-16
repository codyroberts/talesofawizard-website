import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { Engine, DisplayMode, Actor, Color, Vector, vec } from "excalibur";

export default component$(() => {
  useVisibleTask$(() => {
    const game = new Engine({
      width: 800,
      height: 600,
      canvasElementId: "game",
      displayMode: DisplayMode.FitContainer,
    });

    const basicPlayer = new Actor({
      name: "player",
      width: 50,
      height: 50,
      color: Color.Red,
      pos: new Vector(100, 100),
    });

    basicPlayer.actions.repeatForever((builder) => {
      builder.moveBy(vec(100, 0), 20);
      builder.moveBy(vec(-100, 0), 20);
    });

    game.add(basicPlayer);
    game.start();
  });

  return (
    <div class="flex h-game w-game flex-col flex-nowrap items-center justify-center align-middle md:gap-14">
      <canvas id="game"></canvas>
    </div>
  );
});
