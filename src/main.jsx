import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Events from './components/events.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Events/>
  </StrictMode>,
)
