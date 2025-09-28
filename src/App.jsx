import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Homepage from './pages/Homepage'

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <>
      <div className='w-full min-h-screen bg-gray-800'>
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <Homepage setActivePage={setActivePage} />
      </div>
    </>
  )
}

export default App
