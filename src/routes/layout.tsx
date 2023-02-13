import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div style="border: 4px dotted red; padding: 25px">
      <p>
        <code>src/routes/layout.tsx</code>
      </p>
      <Slot />
    </div>
  );
});
