import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Step 1: Import BrowserRouter
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap the entire App in BrowserRouter to enable routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
