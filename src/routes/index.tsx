import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { LeafletMap } from '~/components/map';

export default component$(() => {
  return (
    <div>
      <h1>Leaflet - Qwik</h1>
      <p>Ejemplo de un mapa Leaflet en Qwik</p>
      <p>Pasos para configurar la librería y poder trabajar con Leaflet en Qwik</p>
      <ol>
        <li>Instalar las dependencias de Leaflet: <code>npm i leaflet@1.9.3</code></li>
        <li>Instalar las dependencias de types de Leaflet: <code>npm i -D @types@leaflet</code></li>
        <li>En <code>src/root.tsx</code>añadimos el siguiente código para añadir los estilos de Leaflet que son necesarios<br/><br/>
          <img src="leaflet-use-styles.png" width="40%"/>
        </li>
        <li>Y configurar lo que se muestra <a href="https://leafletjs.com/examples/quick-start/" target="_blank">aquí como referencia</a> en el componente <b>LeafletMap</b> que se encuentra en <code>src/components/map/index.tsx</code> y conseguiremos trabajar con Leaflet :)</li>
      </ol>
      <LeafletMap></LeafletMap>
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
