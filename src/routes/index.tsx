import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>Leaflet - Styles</h1>
      <p>Trabajaremos con los estilos</p>
      <p>Todos los artículos con los que hemos trabajado: <a href="https://medium.com/@mugan86/list/qwik-paso-a-paso-desde-0-al-detalle-e7df8b471166" target="_blank">Medium</a></p>
      <ol>
        <li>Introducción a los estilos</li>
        <li>Estilos globales</li>
        <li>Estilos por componente: Uso de useStyles$ y useStylesScoped$</li>
        <li>CSS en Javascript</li>
        <li>Styled Components (Componentes con estilo)</li>
      </ol>
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
