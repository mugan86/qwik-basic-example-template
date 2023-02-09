import { component$, Slot } from "@builder.io/qwik";

// File: src/routes/about/child/layout.tsx
export default component$(() => {
    return (
      <section class="level-3">
        <h2><code>src/routes/about/child/layout.tsx</code></h2>
        <Slot /> {/* <== Child layout/route inserted here */}
      </section>
    );
  });