import { useState } from 'react'
import CloudinaryComp from './CloudinaryComp'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CloudinaryComp/>
    </>
  )
}

export default App
