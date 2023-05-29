import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Expierence.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <>
    <Canvas>
      <Experience />
    </Canvas>
  </>
)
