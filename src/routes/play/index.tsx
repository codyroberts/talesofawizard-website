import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Game from "~/components/game/game";

export default component$(() => {
  return <Game />;
});

export const head: DocumentHead = {
  title: "Tales of a Wizard",
  meta: [
    {
      name: "description",
      content: "Upcoming Strategy RPG",
    },
  ],
};
