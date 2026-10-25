
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(price);

  return (
    <main className="cart-page">
      <header className="cart-header">
        <p className="section-label">YOUR GREEN COLLECTION</p>
        <h1>Shopping Cart</h1>
        <p>
          {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
        </p>
      </header>

      {cartItems.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-cart-icon" aria-hidden="true">
            🪴
          </div>
          <h2>Your cart is waiting to bloom!</h2>
          <p>Explore our collection and find your favourite plants.</p>
          <Link className="continue-shopping-btn" to="/plants">
            Continue Shopping
          </Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items-list">
            {cartItems.map((item) => (
              <article className="cart-item-card" key={item.id}>
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-info">
                  <h2>{item.name}</h2>

                  <p className="cart-unit-price">
                    Unit price: {formatPrice(item.price)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          })
                        )
                      }
                      disabled={item.quantity <= 1}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>

                    <span aria-live="polite">{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <p className="cart-line-total">
                    Item total: {formatPrice(item.price * item.quantity)}
                  </p>

                  <button
                    type="button"
                    className="remove-item-btn"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </section>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Total items</span>
              <span>{totalItems}</span>
            </div>

            <div className="summary-row summary-total">
              <span>Total amount</span>
              <span>{formatPrice(totalAmount)}</span>
            </div>

            <button
              type="button"
              className="checkout-btn"
              onClick={() => window.alert("Checkout Coming Soon!")}
            >
              Checkout
            </button>

            <Link className="continue-shopping-btn" to="/plants">
              Continue Shopping
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}

export default CartItem;
