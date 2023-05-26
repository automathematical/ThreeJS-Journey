import App from './App.jsx'
import { createRoot } from 'react-dom/client'

import './style.css'

const root = createRoot(document.querySelector('#root'))

const toto = 'tata'

root.render(
  <div>
    <App clickersCount={4}>
      <h1>My first react app</h1>
      <h2>a fancy subtile</h2>
    </App>
  </div>
)
