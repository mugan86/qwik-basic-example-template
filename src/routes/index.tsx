import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div style="border: 4px dotted blue; padding: 25px">
      <p>
        <code>src/routes/index.tsx</code>
      </p>
      <h1>Ruta "/"</h1>
      Esta es la página principal
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
