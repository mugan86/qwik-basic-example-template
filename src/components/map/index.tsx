import { component$, useClientEffect$, useStyles$ } from '@builder.io/qwik';
import { control, LatLngTuple, marker, tileLayer, Map } from 'leaflet';
import mapCss from './map.css?inline';
export const LeafletMap = component$(() => {
  useStyles$(mapCss);

  useClientEffect$(() => {
    const soraluzeTownCenter: LatLngTuple = [43.174778, -2.411722];
    const map = new Map('map').setView(soraluzeTownCenter, 15);

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    marker(soraluzeTownCenter)
      .addTo(map)
      .bindPopup('<h3>Soraluze (Gipuzkoa)</h3>');

    control.scale({ maxWidth: 300, imperial: false }).addTo(map);
  });
  return <div id='map'></div>;
});
