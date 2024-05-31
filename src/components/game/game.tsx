import { component$, useVisibleTask$ } from "@builder.io/qwik";
import {
  AnimatedSprite,
  Application,
  Assets,
  Sprite,
  Spritesheet,
  spritesheetAsset,
  Texture,
} from "pixi.js";
// import OrcSprite from "../../assets/Characters/Orc/walk.png?url";
// import OrcSpriteData from "../../assets/Characters/Orc/walk.json?url";

export default component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    const app = new Application();

    const gameDIV = document.getElementById("game");

    await app.init({ background: "#E6EEF7", resizeTo: gameDIV! });
    gameDIV!.appendChild(app.canvas);

    // Assets.load([OrcSprite, OrcSpriteData]);
    const texturePromise = Assets.load("/assets/Characters/Orc/walk.png");
    const jsonPromise = Assets.load("/assets/Characters/Orc/walk.json");
    const spriteData = await jsonPromise;
    const orcSprite = await texturePromise;

    texturePromise.then((resolvedTexture) => {
      console.log("Texture loaded");

      const Orc = Sprite.from(resolvedTexture);
      Orc.anchor.set(0.5);
      Orc.x = app.screen.width / 2;
      Orc.y = app.screen.height / 2;

      app.stage.addChild(Orc);
    });
  });

  return <div id="game" class="h-game w-game" />;
});
