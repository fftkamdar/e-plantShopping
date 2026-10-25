
import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import Navbar from "./components/Navbar";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-tagline">GROW YOUR OWN PARADISE</p>

            <h1>Paradise Nursery</h1>

            <p className="hero-description">
              Bring life to your space with beautiful houseplants.
              Discover your perfect green companion and let nature
              make your house feel like home.
            </p>

            <button
              className="get-started-btn"
              onClick={() => navigate("/plants")}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <AboutUs />
    </main>
  );
}

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/plants"
        element={
          <>
            <Navbar />
            <ProductList />
          </>
        }
      />

      <Route
        path="/cart"
        element={
          <>
            <Navbar />
            <CartItem />
          </>
        }
      />

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
