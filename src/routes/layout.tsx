import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <nav>
        <h1>Header</h1>
      </nav>
      <section class='row'>
        <div class='column menu-items'>
          <h2>Menú</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
        <div class='column content level-1'>
          <h2><code>src/routes/layout.tsx</code></h2>
          <Slot />
        </div>
      </section>
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
});
