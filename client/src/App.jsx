import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import MosaicPage from './Components/MosaicPage'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Routes>
      <Route path='/' element={<MosaicPage/> } />
    </Routes>
      
    </>
  )
}

export default App
