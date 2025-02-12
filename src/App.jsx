import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Altardrib from './altadrib/Altadrib'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Altardrib />} />
        <Route path="al-tadrib" element={<Altardrib />} />
      </Routes>
    </div>
  )
}

export default App
