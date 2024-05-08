import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ImgGoblin from "../../media/goblin.png?jsx";

export default component$(() => {
  return (
    <div class="flex flex-col h-full gap-10 items-center justify-center mt-20 p-0">
      <p class="text-6xl text-center">The goblins are still setting up.</p> 
      <ImgGoblin class="w-60 h-auto" />
      <p class="text-5xl text-center">Check back soon!</p>
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
