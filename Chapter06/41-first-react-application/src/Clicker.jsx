import { useRef, useEffect, useState } from 'react'

export default function Clicker({ increment, keyName, color }) {
  const [count, setCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0))
  const buttonRef = useRef()

  console.log(buttonRef)

  useEffect(() => {
    return () => {
      localStorage.removeItem(keyName)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(keyName, count)
  }, [count])

  const buttonClick = () => {
    setCount(count + 1)
    increment()
  }

  return (
    <>
      <div style={{ color: color }}>Click count: {count}</div>
      <button
        ref={buttonRef}
        onClick={buttonClick}>
        Click me
      </button>
    </>
  )
}
