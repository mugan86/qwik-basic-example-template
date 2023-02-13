import { component$, Slot } from "@builder.io/qwik";
import { Header } from "~/components/core/header";

export default component$(() => {
  return (
    <>
      <Header />
      <section class="row">
        <Slot />
      </section>
    </>
  );
});