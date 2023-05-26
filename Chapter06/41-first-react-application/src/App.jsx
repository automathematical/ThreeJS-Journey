import { useState } from 'react'
import Clicker from './clicker'

export default function App({ clickersCount, children }) {
  const [hasClicker, setHasClicker] = useState(true)
  const [count, setCount] = useState(0)

  const toggleClickerClick = () => {
    setHasClicker(!hasClicker)
  }

  const increment = () => {
    setCount(count + 1)
  }

  //   const tempArray = [...Array(clickersCount)]
  //   tempArray.map((value, index) => {
  //     console.log(value, index)
  //   })

  return (
    <>
      {children}

      <div>Total count: {count}</div>

      <button onClick={toggleClickerClick}>{hasClicker ? 'hide' : 'show'} Clicker</button>
      {hasClicker && (
        <>
          {[...Array(clickersCount)].map(() => {
            return (
              <Clicker
                increment={increment}
                keyName="countA"
                color={`hsl(${Math.random() * 360}deg,100%,70%)`}
              />
            )
          })}
        </>
      )}
    </>
  )
}
