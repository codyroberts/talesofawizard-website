import { component$, Slot } from "@builder.io/qwik";
import ImgBook from "../../media/OldBook.png?jsx";
import { Link } from "@builder.io/qwik-city";

type HeaderLinkProps = { href: string };

const HeaderLink = component$<HeaderLinkProps>(({ href }) => {
  return (
    <li id="navElement" class="m-0 p-0 text-xs sm:inline-block">
      <Link
        class="inline-block p-0 text-sm text-dark-text no-underline hover:text-highlight md:text-2xl"
        href={href}
      >
        <Slot />
      </Link>
    </li>
  );
});

export default component$(() => {
  return (
    <>
      {/* Desktop */}
      <div class="hidden lg:flex lg:items-center lg:justify-evenly">
        <ul class="m-0 flex list-none flex-col items-center p-0 lg:flex-row lg:gap-8">
          <li class="group relative">
            <p class="cursor-pointer md:text-2xl">Game</p>
            <ul class="absolute left-0 top-full hidden list-none hover:block group-hover:block">
              <HeaderLink href="/play">Play</HeaderLink>
            </ul>
          </li>
          <li class="group relative">
            <p class="cursor-pointer md:text-2xl">Learn</p>
            <ul class="absolute left-0 top-full hidden list-none hover:block group-hover:block">
              <HeaderLink href="/learn">Story</HeaderLink>
              <HeaderLink href="/learn">Classes</HeaderLink>
              <HeaderLink href="/learn">Races</HeaderLink>
              <HeaderLink href="/learn">World</HeaderLink>
            </ul>
          </li>
          <li class="m-0 inline-block p-0 text-xs">
            <a
              class="inline-block p-0 text-sm text-dark-text no-underline hover:text-highlight md:text-2xl"
              href="/"
            >
              <ImgBook class="m-0 h-auto max-w-24 p-0 hover:drop-shadow-highlight lg:max-w-28" />
            </a>
          </li>
          <li class="group relative">
            <p class="cursor-pointer md:text-2xl">Github</p>
            <ul class="absolute left-0 top-full hidden list-none hover:block group-hover:block">
              <a
                href="https://github.com/codyroberts/talesofawizard-website"
                target="_blank"
                class="inline-block p-0 text-sm text-dark-text no-underline hover:text-highlight md:text-2xl"
              >
                Website
              </a>
              <a
                href="https://github.com/codyroberts/talesofawizard"
                target="_blank"
                class="inline-block p-0 text-sm text-dark-text no-underline hover:text-highlight md:text-2xl"
              >
                Game
              </a>
            </ul>
          </li>
          <li class="group relative">
            <p class="cursor-pointer md:text-2xl">Community</p>
            <ul class="absolute left-0 top-full hidden list-none hover:block group-hover:block">
              <a
                href="https://discord.gg/rjX2JbYAVR"
                target="_blank"
                class="inline-block p-0 text-sm text-dark-text no-underline hover:text-highlight md:text-2xl"
              >
                Discord
              </a>
              <HeaderLink href="/">Leaderboards</HeaderLink>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
});
