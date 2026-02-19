import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <Router>
      {/* The wrapper div below is the "Lock". 
        'overflow-x-hidden' prevents horizontal scroll.
        'flex flex-col min-h-screen' ensures the footer stays at the bottom.
      */}
      <div className="relative overflow-x-hidden flex flex-col min-h-screen w-full">
        <Header />

        {/* 'flex-grow' ensures the main content fills space between header and footer */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
