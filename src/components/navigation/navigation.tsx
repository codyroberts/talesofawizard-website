import { component$ } from "@builder.io/qwik";
import ImgBook from "../../media/OldBook.png?jsx"
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex lg:items-center lg:justify-evenly">
    <ul class="flex items-center flex-col lg:flex-row list-none lg:gap-8 m-0 p-0">

        <li id="navElement" class="inline-block m-0 p-0 text-xs">
        <Link class="max-sm:invisible lg:inline-block text-dark-text text-sm no-underline p-0 hover:text-highlight md:text-2xl" href="/play">
            Play
        </Link>
        </li>
        <li id="navElement" class="inline-block m-0 p-0 text-xs">
        <Link class="max-sm:invisible lg:inline-block text-dark-text text-sm no-underline p-0 hover:text-highlight md:text-2xl" href="/learn">
            Learn
        </Link>
        </li>
        <li class="max-sm:order-first inline-block m-0 p-0 text-xs"> 
        <Link onClick$={() => {

            document.querySelectorAll('[id=navElement]').forEach((element)=>{
                element.classList.toggle("max-sm:invisible");
            });
        
        }} class="inline-block text-dark-text text-sm no-underline p-0 hover:text-highlight md:text-2xl">
            <ImgBook class="max-w-28 h-auto m-0 p-0 hover:drop-shadow-highlight" />
        </Link>
        </li>
        <li id="navElement" class="inline-block m-0 p-0 text-xs">
        <Link class="max-sm:invisible lg:inline-block text-dark-text text-sm no-underline p-0 hover:text-highlight md:text-2xl"
            href="https://github.com/codyroberts/talesofawizard"
            target="_blank"
        >
            Github
        </Link>
        </li>
        <li id="navElement" class="inline-block m-0 p-0 text-xs">
        <Link class="max-sm:invisible lg:inline-block text-dark-text text-sm no-underline p-0 hover:text-highlight md:text-2xl"
            href="https://discord.gg/rjX2JbYAVR"
            target="_blank"
        >
            Discord
        </Link>
        </li>
    </ul>
    </div>
  );
});
