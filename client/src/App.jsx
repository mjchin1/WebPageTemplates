import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import MosaicPage from './Components/MosaicPage'
import DescendingScalePage2 from './components/DescendingScalePage2'
import DescendingScalePage1 from './components/DescendingScalePage1'
import Navigations from './Components/Navigations'

function App() {



  return (
    <>
    <div>
    <Navigations/>
    <Routes>
      <Route path='/' element={<MosaicPage/> } />
      <Route path='/ds2' element={<DescendingScalePage2/> } />
      <Route path='/ds1' element={<DescendingScalePage1/> } />
      <Route path='/ds1' element={<DescendingScalePage1/> } />
    </Routes>

    </div>
      
    </>
  )
}

export default App
