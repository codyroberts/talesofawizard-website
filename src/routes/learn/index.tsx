import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ImgArchivist from "../../media/Archivist.png?jsx";

export default component$(() => {
  return (
    <div class="mt-20 flex h-full flex-col items-center justify-center gap-10 p-0">
      <p class="text-center text-6xl">The archives are not ready for guests.</p>
      <ImgArchivist class="h-auto w-60" />
      <p class="text-center text-5xl">Check back soon!</p>
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
