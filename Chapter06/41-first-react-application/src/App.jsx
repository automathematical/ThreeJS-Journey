import { useState } from 'react'
import Clicker from './clicker'

export default function App() {
  const [hasClicker, setHasClicker] = useState(true)

  const toggleClickerClick = () => {
    setHasClicker(!hasClicker)
  }

  return (
    <>
      <button onClick={toggleClickerClick}>
        {hasClicker ? 'hide' : 'show'} Clicker
      </button>
      {hasClicker && <Clicker />}
    </>
  )
}
