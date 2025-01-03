<!-- eslint-disable -->
<template>
  <!-- Marker rendering by Leaflet. -->
</template>
<!-- eslint-enable -->

<script setup lang="ts">
import type { Marker } from 'leaflet'
import type { Coordinate, MapInjection } from 'types/leaflet'

const props = defineProps<{
  center: Coordinate
  title?: string
}>()

let marker: Marker

const onMapReady = inject(`onMapReady`) as MapInjection
onMapReady((map, { marker: createMarker, tooltip: createTooltip, Icon }) => {
  Icon.Default.imagePath = `/leaflet/img/`

  marker = createMarker(props.center, {
    autoPan: true,
  })

  if (props.title) {
    const tooltip = createTooltip({ content: props.title, permanent: true })
    marker.bindTooltip(tooltip)
  }

  marker.addTo(map)
})

onUpdated(() => {
  if (marker) {
    marker.setLatLng(props.center)
  }
})
</script>
