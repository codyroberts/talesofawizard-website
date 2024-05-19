import { component$, Slot, useSignal } from "@builder.io/qwik";
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
  let mobileMenu = useSignal(false);

  return (
    <>
      {/* Desktop */}
      <div class="hidden lg:flex lg:items-center lg:justify-evenly">
        <ul class="m-0 flex list-none flex-col items-center p-0 lg:flex-row lg:gap-8">
          <HeaderLink href="/play">Play</HeaderLink>
          <HeaderLink href="/learn">Learn</HeaderLink>
          <li class="m-0 inline-block p-0 text-xs">
            <a
              class="inline-block p-0 text-sm text-dark-text no-underline hover:text-highlight md:text-2xl"
              href="/"
            >
              <ImgBook class="m-0 h-auto max-w-24 p-0 hover:drop-shadow-highlight lg:max-w-28" />
            </a>
          </li>
          <HeaderLink href="https://github.com/codyroberts/talesofawizard">
            Github
          </HeaderLink>
          <HeaderLink href="https://discord.gg/rjX2JbYAVR">Discord</HeaderLink>
        </ul>
      </div>
      {/* Mobile */}
      <div class="mt-96 flex justify-evenly lg:hidden">
        <div class="flex-col justify-between">
          <div
            onClick$={() => {
              mobileMenu.value = !mobileMenu.value;
            }}
            class="ml-2 flex justify-start"
          >
            <ImgBook class="m-0 h-auto max-w-24 p-0 hover:drop-shadow-highlight lg:max-w-28" />
          </div>
          {mobileMenu.value && (
            <ul class="m-0 ml-5 list-none flex-col justify-start p-0">
              <HeaderLink href="/">Home</HeaderLink>
              <HeaderLink href="/play">Play</HeaderLink>
              <HeaderLink href="/learn">Learn</HeaderLink>
              <HeaderLink href="https://github.com/codyroberts/talesofawizard">
                Github
              </HeaderLink>
              <HeaderLink href="https://discord.gg/rjX2JbYAVR">
                Discord
              </HeaderLink>
            </ul>
          )}
        </div>
      </div>
    </>
  );
});
