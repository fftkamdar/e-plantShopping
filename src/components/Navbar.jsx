
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        Paradise Nursery
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>

        <button
          className="cart-nav-button"
          onClick={() => navigate("/cart")}
          aria-label={`Shopping cart, ${cartCount} items`}
        >
          <span aria-hidden="true">🛒</span> Cart
          <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
