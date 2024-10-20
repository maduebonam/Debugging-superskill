import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ShoppingApp from './ShoppingApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShoppingApp />
  </StrictMode>,
)
