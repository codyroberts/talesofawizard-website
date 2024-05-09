import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex align-middle flex-col flex-nowrap items-center justify-center md:gap-14">
      <h1 class="text-4xl mt-32 md:text-6xl lg:text-8xl md:mt-32 lg:mt-64">
        The wizard's grimoire
        <br />
        has been opened.
      </h1>
      <p class="text-white m-0 text-base font-serif md:text-xl">Will your story be told?</p>
    </div>
  );
});
