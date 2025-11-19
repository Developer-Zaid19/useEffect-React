import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [count, setCount] = useState(0)
  const [first, setFirst] = useState(0)
  const [color, setColor] = useState(0)

//use effect of first rendering of page
// useEffect(() => {
//   alert("first rendering of page")
// }, [])

//running use effect because count is change
// useEffect(() => {
//   alert("running use effect because count is change")
// }, [count])

//running use effect because page is rerender
  useEffect(() => {
    alert("running use effect because page is rerender")
  })

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
