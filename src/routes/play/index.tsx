import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Game from "~/components/game/game";

export default component$(() => {
  return (
    <div class="mt-20 flex h-full flex-col items-center justify-center gap-10 p-0">
      <Game />;
    </div>
  );
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
