import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PuppyShow from "./components/PuppyShow";
import SettingsPanel from "./components/pages/SettingsPanel";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

import { SettingsProvider } from "./context/SettingsContext";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <SettingsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PuppyShow />} />
          <Route path="/settings" element={<SettingsPanel />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </SettingsProvider>
  );
}