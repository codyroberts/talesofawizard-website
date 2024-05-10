import { component$ } from "@builder.io/qwik";
import NavigationBar from "../navigation/navigation";

export default component$(() => {
  return (
    <header>
      <NavigationBar />
    </header>
  );
});
