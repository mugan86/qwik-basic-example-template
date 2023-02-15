import { component$, useStore, useStyles$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';
export const PlusInfoCss = `
.plus-info {
  margin-top: 1em;
  border: 1px solid red;
  padding: 1em;
  display: block;
}
`;
export const PlusInfo = component$(() => {
  useStyles$(PlusInfoCss);
  return (
    <div class='plus-info'>
      <div>More info...</div>
    </div>
  );
});

export default component$(() => {
  const store = useStore({ open: false });
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
      <ol>
        <li>Introducción a los estilos</li>
        <li>Estilos globales</li>
        <li>Estilos por componente: Uso de useStyles$ y useStylesScoped$</li>
        <li>CSS en Javascript</li>
        <li>Styled Components (Componentes con estilo)</li>
      </ol>
      {store.open ? <PlusInfo /> : null}
      <button onClick$={() => (store.open = !store.open)}>
        Show Plus Info
      </button>
      <br />
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
