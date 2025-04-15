import { useState } from 'react'
import Responsive from './component/Responsive'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Responsive />
    </>
  )
}

export default App
