import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Friends from './Friends'
import Countries from './countries/Countries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React</h1>
      {/* <Friends></Friends> */}
      <Countries></Countries>
    </>
  )
}

export default App
