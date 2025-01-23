import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import MosaicPage from './Components/MosaicPage'
import DescendingScalePage from './Components/DescendingScalePage'
import Navigations from './Components/Navigations'

function App() {



  return (
    <>
    <div>
    <Navigations/>
    <Routes>
      <Route path='/' element={<MosaicPage/> } />
      <Route path='/ds' element={<DescendingScalePage/> } />
    </Routes>

    </div>
      
    </>
  )
}

export default App
