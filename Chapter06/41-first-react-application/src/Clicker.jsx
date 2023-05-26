import { useEffect, useState } from 'react'

export default function Clicker() {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem('count') ?? 0)
  )

  useEffect(() => {
    // console.log('first render');
    return () => {
      localStorage.removeItem('count')
    }
  })

  useEffect(() => {
    const savedCount = parseInt(localStorage.getItem('count') ?? 0) // ?? 0 set initial value on 0 of NAN
    setCount(savedCount)
  }, [])

  useEffect(() => {
    localStorage.setItem('count', count)
  }, [count])

  const buttonClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>Click count: {count}</div>
      <button onClick={buttonClick}>Click me</button>
      {/* <button onClick={buttonReset}>Reset</button> */}
    </>
  )
}
