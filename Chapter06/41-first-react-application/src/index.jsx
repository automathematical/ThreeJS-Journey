import App from './App.jsx'
import { createRoot } from 'react-dom/client'

import './style.css'

const root = createRoot(document.querySelector('#root'))

const toto = 'tata'

root.render(
  <div>
    <App />
  </div>
)
