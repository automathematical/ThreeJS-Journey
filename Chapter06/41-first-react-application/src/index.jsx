import './style.css'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

const toto = 'tata'

root.render(
  <>
    <h1 className="title">Hello {Date.now()}</h1>
    <p>
      Lorem <strong>ipsum</strong> dolor sit amet consectetur adipisicing elit.
      Iure id commodi doloribus magni sequi! <br /> Exercitationem, consequatur
      ipsam eveniet ipsum perferendis, esse libero ex quod repellendus itaque
      optio debitis ratione beatae?
    </p>
  </>
)
