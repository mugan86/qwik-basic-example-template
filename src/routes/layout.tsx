import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <nav>
        <h1>Header</h1>
      </nav>
      <section class='row'>
        <div class='column menu-items'>
          <h2>Menu</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
        <div class='column content'>
          <Slot />
        </div>
      </section>
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
});
