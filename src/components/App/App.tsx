// import { useState } from 'react'

import { lazy } from "react";

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HomePage/>
    </>
  )
}

export default App
