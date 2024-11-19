import { Route, Router, Routes } from "react-router-dom"
import NavPage from "./components/Nav"
import HomePage from "./components/Home"
import ProjectsPage from "./components/Projects"
import ContactPage from "./components/Contact"
import AboutPage from "./components/About"

function App() {
  return (
    <div>
      <NavPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App
