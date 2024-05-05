import { component$ } from "@builder.io/qwik";

export default component$(() => {

  return (
    <footer class="fixed w-screen min-h-16 flex items-center justify-center bottom-0">
      <div class="flex flex-row justify-evenly items-center">
        <span class="block text-white text-sm mr-2">A game by</span> 
        <a href="https://www.codyroberts.net/" target="_blank" class="block text-white text-sm mr-2">
          <span class="text-sm no-underline text-light-purple"> Cody Roberts</span>
        </a>
      </div>
      
      <span class="text-sm mr-2">|</span>
      
      <div class="flex flex-row justify-evenly items-center">
        <span class="block text-white text-sm mr-2">Art by </span> 
        <a href="https://rickhershey.myportfolio.com/" target="_blank" class="block text-white text-sm mr-2">
          <span class="text-sm no-underline text-light-purple"> Rick Hershey</span>
        </a>
      </div>
    </footer>
  );
});
