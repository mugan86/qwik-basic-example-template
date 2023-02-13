import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div style='border: 4px dotted blue; padding: 25px'>
      <p>
        <code>src/routes/about/index.tsx</code>
      </p>
      <h1>Ruta "/about/about-one"</h1>
      Esta es la página 'about'
    </div>
  );
});
