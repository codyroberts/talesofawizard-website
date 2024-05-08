import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ImgArchivist from "../../media/Archivist.png?jsx";

export default component$(() => {
  return (
    <div class="flex flex-col h-full gap-10 items-center justify-center mt-20 p-0">
      <p class="text-6xl text-center">The archives are not ready for guests.</p> 
      <ImgArchivist class="w-60 h-auto" />
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
