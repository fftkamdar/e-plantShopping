
import React from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantCategories = [
  {
    name: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 299, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b1b?auto=format&fit=crop&w=600&q=80" },
      { id: 2, name: "Peace Lily", price: 349, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80" },
      { id: 3, name: "Spider Plant", price: 249, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80" },
      { id: 4, name: "Areca Palm", price: 499, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80" },
      { id: 5, name: "Rubber Plant", price: 399, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80" },
      { id: 6, name: "Boston Fern", price: 279, image: "https://images.unsplash.com/photo-1597055181300-e3633a917d66?auto=format&fit=crop&w=600&q=80" },
    ],
  },
  {
    name: "Low Maintenance Plants",
    plants: [
      { id: 7, name: "ZZ Plant", price: 399, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80" },
      { id: 8, name: "Jade Plant", price: 199, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80" },
      { id: 9, name: "Aloe Vera", price: 179, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80" },
      { id: 10, name: "Pothos", price: 229, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80" },
      { id: 11, name: "Lucky Bamboo", price: 259, image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80" },
      { id: 12, name: "Ponytail Palm", price: 449, image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=600&q=80" },
    ],
  },
  {
    name: "Decorative Foliage Plants",
    plants: [
      { id: 13, name: "Monstera", price: 599, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80" },
      { id: 14, name: "Calathea", price: 449, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80" },
      { id: 15, name: "Philodendron", price: 379, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80" },
      { id: 16, name: "Bird of Paradise", price: 699, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80" },
      { id: 17, name: "Chinese Evergreen", price: 329, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80" },
      { id: 18, name: "Parlor Palm", price: 349, image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Map cart contents by plant name for the rubric-required disabled state.
  const addedToCart = Object.fromEntries(
    cartItems.map((item) => [item.name, true])
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <>
      <Navbar />
      <main className="products-page">
        <header className="products-header">
          <p className="section-label">FIND YOUR GREEN COMPANION</p>
          <h1>Our Houseplant Collection</h1>
          <p>Explore our collection and find the perfect plants for your space.</p>
        </header>

        {plantCategories.map((category) => (
          <section className="plant-category" key={category.name}>
            <h2>{category.name}</h2>
            <div className="product-list">
              {category.plants.map((plant) => (
                <article className="plant-card" key={plant.id}>
                  <img
                    className="plant-image"
                    src={plant.image}
                    alt={plant.name}
                    loading="lazy"
                  />
                  <div className="plant-details">
                    <h3>{plant.name}</h3>
                    <p className="plant-price">₹{plant.price.toFixed(2)}</p>
                    <button
                      type="button"
                      className="add-to-cart-btn"
                      disabled={Boolean(addedToCart[plant.name])}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default ProductList;
