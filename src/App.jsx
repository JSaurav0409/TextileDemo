import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";

// 1. Import your custom logic hook
import useScrollToTop from "./hooks/useScrollTop";

// 2. Create the wrapper to call the hook inside the Router context
const AppContent = () => {
  // This ensures the window resets to (0,0) whenever the URL path changes
  useScrollToTop();

  return (
    <div className="relative overflow-x-hidden flex flex-col min-h-screen w-full">
      <Header />

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
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
