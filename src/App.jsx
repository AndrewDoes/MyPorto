import './App.css'
import Navbar from './components/navbar'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import AboutMePage from './pages/AboutMePage'



export default function App() {
  return (
    <>
      <div className='w-full min-h-screen  overflow-x-hidden'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<AboutMePage/>} />
        </Routes>
      </div>
    </>
  )
}
