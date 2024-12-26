import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import the Footer
import styles from "./styles/App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* Render the Footer */}
      </div>
    </Router>
  );
}

export default App;
