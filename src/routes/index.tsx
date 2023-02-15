import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';

export const OrangeComponent = component$(() => {
  useStylesScoped$(`
    .bg {
      background-color: orange;
    }`);
  return (
    <div class="bg">
      <div>OrangeComponent</div>
    </div>
  );
});

export const GreenComponent = component$(() => {
  useStylesScoped$(`
    .bg {
      background-color: green;
    }`);

  return (
    <div class="bg">
      <div>Green Componente</div>
    </div>
  );
});

export default component$(() => {
  return (
    <div>
      <h1>Leaflet - Styles</h1>
      <p>Trabajaremos con los estilos</p>
      
      <OrangeComponent/>
      <GreenComponent/>
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
