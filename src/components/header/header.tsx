import { component$ } from "@builder.io/qwik";
import ImgBook from "../../media/OldBook.png?jsx"
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header>
      <div class="flex items-center justify-evenly">
        <ul class="flex items-center list-none gap-8 m-0 p-0">

          {/* TODO: Make header list item component */}
          <li class="inline-block m-0 p-0 text-xs">
            <Link class="inline-block text-dark-text text-sm no-underline p-0 hover:text-highlight md:text-2xl" href="/play">
              Play
            </Link>
          </li>
          <li class="inline-block m-0 p-0 text-xs">
            <Link class="inline-block text-dark-text text-sm no-underline p-0 hover:text-highlight md:text-2xl" href="/learn">
              Learn
            </Link>
          </li>
          <li class="inline-block m-0 p-0 text-xs"> 
            <Link class="inline-block text-dark-text text-sm no-underline p-0 hover:text-highlight md:text-2xl" href="/">
              <ImgBook class="max-w-28 h-auto m-0 p-0 hover:drop-shadow-highlight" />
            </Link>
          </li>
          <li class="inline-block m-0 p-0 text-xs">
            <Link class="inline-block text-dark-text text-sm no-underline p-0 hover:text-highlight md:text-2xl"
              href="https://github.com/codyroberts/talesofawizard"
              target="_blank"
            >
              Github
            </Link>
          </li>
          <li class="inline-block m-0 p-0 text-xs">
            <Link class="inline-block text-dark-text text-sm no-underline p-0 hover:text-highlight md:text-2xl"
              href="https://discord.gg/rjX2JbYAVR"
              target="_blank"
            >
              Discord
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
