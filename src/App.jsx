import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";
import RequestQuote from "./pages/Contact/RequestQuote"; // New Page
import useScrollToTop from "./hooks/useScrollTop";

const AppContent = () => {
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
          {/* New Route Added Below */}
          <Route path="/request-quote" element={<RequestQuote />} />
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
