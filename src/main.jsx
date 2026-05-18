import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeIcons } from '@fluentui/react/lib/Icons'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

initializeIcons()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
