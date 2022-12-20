<script setup lang="ts">
import * as mapboxgl from 'mapbox-gl'


onMounted(() => {
  // @ts-expect-error
  mapboxgl.accessToken = 'pk.eyJ1IjoicWluZ3VhbiIsImEiOiJjbDRzbG00aWcwM3F4M2pvd2hwMGZqMXM5In0.Hrs3-ffnUNMXMYttOq9Vew';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [103.90215026158484, 1.3880573878458051],
    zoom: 8
  });

  map.on('load', () => {
    map.loadImage('./orange-bincent-50.png', (error, image) => {
      if (error || !image) throw error

      map.addImage('bincent', image)
      map.addSource('points', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              // feature for Mapbox DC
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [
                  103.9627694476958, 1.341293768422969
                ]
              },
              'properties': {
                'title': 'Bincent SUTD'
              }
            },
          ]
        }
      });

      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        'layout': {
          'icon-image': 'bincent',
        }
      });
    })
  })


  map.on('click', (event) => {
    const features = map.queryRenderedFeatures(event.point, {
    });
    if (!features.length) {
      return;
    }
    const feature = features[0];

    new mapboxgl.Popup({ offset: [0, -15] })
      // @ts-expect-error
      .setLngLat(feature.geometry.coordinates)
      .setHTML(
        // @ts-expect-error
        `<h3>${feature.properties.title}</h3>`
      )
      .addTo(map);
  })
})
</script>

<template>
  <div class="flex h-full flex-col">
    <h1 class="font-semibold text-xl">Find a Bincent</h1>
    <div id="map" class="flex-1 mt-3" />
  </div>
</template>
