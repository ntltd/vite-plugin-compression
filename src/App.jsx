import { useState } from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import { camelCase } from 'lodash/string.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <span>{camelCase('vite plugin compression')}</span>
      const position = [51.505, -0.09]

      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>,
    </>
  )
}

export default App
