import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function Home() {
  const [showProductList, setShowProductList] = useState(false);

  // The app-container handles the Get Started click and reveals the product list.
  const handleAppContainerClick = (event) => {
    if (event.target.closest(".get-started-btn")) {
      setShowProductList(true);
    }
  };

  if (showProductList) {
    return <ProductList />;
  }

  return (
    <div className="app-container" onClick={handleAppContainerClick}>
      <main>
        <section className="hero background-image">
          <div className="hero-overlay">
            <div className="hero-content">
              <p className="hero-tagline">GROW YOUR OWN PARADISE</p>
              <h1>Welcome to Paradise Nursery</h1>
              <p className="hero-description">
                Bring life to your space with beautiful houseplants.
                Discover your perfect green companion and let nature
                make your house feel like home.
              </p>
              <button type="button" className="get-started-btn">
                Get Started
              </button>
            </div>
          </div>
        </section>
        <AboutUs />
      </main>
    </div>
  );
}

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
