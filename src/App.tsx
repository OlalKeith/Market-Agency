import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar  from "./components/Navbar.tsx";
import Footer  from "./components/Footer.tsx";
import Home  from "./pages/Home.tsx";
import Works from "./pages/Works.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";



function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
