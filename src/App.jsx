import { useState } from 'react'
import './tw-styles.css'
import TitleBar from './components/TitleBar'
import MapDisplay from './components/MapDisplay' 
import PlaqueModal from './components/PlaqueModal'

function App() {
  const [count, setCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

return (
  <div className="mx-auto max-w-screen-xl bg-cyan-500 min-h-screen">
    <TitleBar title="🍦 RM OpenPlaques Recommended Reading" />
    <MapDisplay longitude={-9.165209} latitude={38.717856} zoom={16} />
    {isModalOpen ? <PlaqueModal /> : null}
  </div>
)
}

export default App
