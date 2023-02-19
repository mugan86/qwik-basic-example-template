import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';
import { greenClass, orangeClass, RedBox } from '~/styles/colors.css';

export const OrangeComponent = component$(() => {
  return (
    <div class={orangeClass}>
      <div>OrangeComponent</div>
    </div>
  );
});

export const GreenComponent = component$(() => {
  return (
    <div class={greenClass}>
      <div>Green Componente</div>
    </div>
  );
});

export default component$(() => {
  return (
    <div>
      <h1>Leaflet - Styles</h1>
      <p>Trabajaremos con los estilos</p>
      <RedBox>
        ¡¡Aquí el contenido con el fondo rojo!!
      </RedBox>
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
