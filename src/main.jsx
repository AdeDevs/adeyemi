import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Vanilla CSS imports commented out to prevent conflicts with Tailwind CSS:
// import './styles/reset.css'
// import './styles/home.css'
// import './styles/about.css'
// import './styles/contact.css'
// import './styles/projects.css'
import './styles/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
