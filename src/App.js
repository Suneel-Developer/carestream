import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MedicalImaging from "./pages/MedicalImaging";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import Detectors from "./pages/Detectors";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicalimaging" element={<MedicalImaging />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company" element={<Company />} />
        <Route path="/detectors" element={<Detectors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
