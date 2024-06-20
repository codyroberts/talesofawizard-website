import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ImgGoblin from "../media/goblin.png?jsx";

export default component$(() => {
  return (
    <div class="mt-20 flex h-full flex-col items-center justify-center gap-10 p-0">
      <p class="text-center text-6xl">Only goblins here.</p>
      <ImgGoblin class="h-auto w-60" />
      <p class="text-center text-5xl">It's best to turn back.</p>
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
