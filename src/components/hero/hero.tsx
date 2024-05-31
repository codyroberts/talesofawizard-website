import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex flex-col flex-nowrap items-center justify-center align-middle md:gap-14">
      <h1 class="mt-32 text-4xl md:mt-32 md:text-6xl lg:mt-64 lg:text-8xl">
        The wizard's grimoire
        <br />
        has been opened.
      </h1>
      <p class="text-white m-0 font-serif text-base md:text-xl">
        Will your story be told?
      </p>
    </div>
  );
});
