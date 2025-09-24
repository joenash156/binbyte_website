import { Route, Routes } from "react-router-dom"
import AppLayout from "./AppLayout"
import Homepage from "./pages/Homepage"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
