import type { Map } from 'leaflet'

type Leaflet = typeof import('leaflet')
type Coordinate = [number, number]
type Callback = (map: Map, leaflet: Leaflet) => void
type MapInjection = (callback: Callback) => void

export type { Leaflet, Coordinate, Callback, MapInjection }
