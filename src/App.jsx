import { Routes, Route } from 'react-router-dom'
import './App.css'
import Altadrib from './altadrib/Altadrib'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Altadrib />} />
        <Route path="al-tadrib" element={<Altadrib />} />
      </Routes>
    </div>
  )
}

export default App

