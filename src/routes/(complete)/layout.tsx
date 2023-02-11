import { component$, Slot } from '@builder.io/qwik';
import { Footer } from '~/components/core/footer';
import { Header } from '~/components/core/header';
import { Menu } from '~/components/core/menu';

export default component$(() => {
  return (
    <>
      <Header />
      <section class='row'>
        <Menu />
        <div class='column content'>
          <Slot />
        </div>
      </section>
      <Footer />
    </>
  );
});
