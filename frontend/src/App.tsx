import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import AppLayout from "./AppLayout"
import Homepage from "./pages/Homepage"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import ScrollTop from "./components/ScrollTop"
import TeamMember from "./pages/TeamMember"
import Learners from "./pages/Learners"
import Projects from "./pages/Projects"
import LearnerPage from "./pages/LearnerPage"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    })
  }, [])

  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/team/:id" element={<TeamMember />} />
          <Route path="/learners" element={<Learners />} />
          <Route path="/learner/:id" element={<LearnerPage />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
