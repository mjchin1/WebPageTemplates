import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import MosaicPage from './Components/MosaicPage'
import DescendingScalePage2 from './components/DescendingScalePage2'
import AlternatingScale from './components/AlternatingScale'
import VerticalAlternatingSquares1 from './components/VerticalAlternatingSquares1'
import Navigations from './Components/Navigations'
import Kaleidescope from './Components/Kaleidescope'

function App() {



  return (
    <>
    <div>
    <Navigations/>
    <Routes>
      <Route path='/' element={<MosaicPage/> } />
      <Route path='/ds2' element={<DescendingScalePage2/> } />
      <Route path='/as' element={<AlternatingScale/> } />
      <Route path='/vas1' element={<VerticalAlternatingSquares1/> } />
      <Route path='/klds' element={<Kaleidescope/> } />
    </Routes>

    </div>
      
    </>
  )
}

export default App
