import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div>
      <p>
        <code>src/routes/layout.tsx</code>
      </p>
      <Slot />
    </div>
  );
});
