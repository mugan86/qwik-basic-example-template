import { component$, useStyles$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';



export default component$(() => {
  return (
    <div>
      <h1>Leaflet - Styles</h1>
      <p>Trabajaremos con los estilos</p>
      <p>
        Todos los artículos con los que hemos trabajado:{' '}
        <a
          href='https://medium.com/@mugan86/list/qwik-paso-a-paso-desde-0-al-detalle-e7df8b471166'
          target='_blank'
        >
          Medium
        </a>
      </p>
      <Link href='/second'>Second Page</Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Leaflet in Qwik',
  meta: [
    {
      name: 'description',
      content: 'Example to work with Leaflet in Qwik',
    },
  ],
};
