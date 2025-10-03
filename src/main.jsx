import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Step 1: Import BrowserRouter
import Background from './components/background.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Background/>
      <App />
  </StrictMode>,
)
