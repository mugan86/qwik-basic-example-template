import { component$, useClientEffect$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Map, marker, tileLayer } from 'leaflet';

export default component$(() => {

  useClientEffect$(() => {
    const map = new Map('map').setView([51.505, -0.09], 13);

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

    marker([51.505, -0.09]).addTo(map)
  })
  return (
    <div style="border: 4px dotted blue; padding: 25px">
      <p>
        <code>src/routes/index.tsx</code>
      </p>
      <h1>Ruta "/"</h1>
      Esta es la página principal
      <div id="map"></div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
