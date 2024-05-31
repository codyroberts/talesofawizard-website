import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="fixed bottom-0 flex min-h-16 w-screen items-center justify-center">
      <div class="flex flex-row items-center justify-evenly">
        <span class="text-white mr-2 block text-sm">A game by</span>
        <a
          href="https://www.codyroberts.net/"
          target="_blank"
          class="text-white mr-2 block text-sm"
        >
          <span class="text-sm text-light-purple no-underline">
            {" "}
            Cody Roberts
          </span>
        </a>
      </div>

      <span class="mr-2 text-sm">|</span>

      <div class="flex flex-row items-center justify-evenly">
        <span class="text-white mr-2 block text-sm">Art by </span>
        <a
          href="https://rickhershey.myportfolio.com/"
          target="_blank"
          class="text-white mr-2 block text-sm"
        >
          <span class="text-sm text-light-purple no-underline">
            {" "}
            Rick Hershey
          </span>
        </a>
      </div>
    </footer>
  );
});
