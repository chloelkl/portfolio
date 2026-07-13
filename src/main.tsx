import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './sections/About.tsx'
import Projects from './sections/Projects.tsx'
import Certificates from './sections/Certificates.tsx'
import LinkedIn from './sections/LinkedIn.tsx'
import Navbar from './components/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <About />
    <Navbar />
    <Projects />
    <Certificates />
    <LinkedIn />
  </StrictMode>,
)
