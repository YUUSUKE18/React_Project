import React from "react";
import "./App.css";

function App() {
  const sidebarOpen = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={sidebarOpen}>&#9776;</button>
          <a href="/">
            <h1>React Shopping</h1>
          </a>
        </div>
        <div className="header-links">
          <a href="/cart">CART</a>
          <a href="/signin">SIGNIN</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>React Shopping | Category</h3>
        <button className="close-btn" onClick={closeMenu}>
          X
        </button>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Men</a>
          </li>
          <li>
            <a href="/">Women</a>
          </li>
          <li>
            <a href="/">Kids</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/product1.jpg"
                  alt="product1"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">None</div>
                <div className="product-price">$39</div>
                <div className="product-rating">4.5 Stars</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/product1.jpg"
                  alt="product1"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">None</div>
                <div className="product-price">$39</div>
                <div className="product-rating">4.5 Stars</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/product1.jpg"
                  alt="product1"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">None</div>
                <div className="product-price">$39</div>
                <div className="product-rating">4.5 Stars</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/product1.jpg"
                  alt="product1"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">None</div>
                <div className="product-price">$39</div>
                <div className="product-rating">4.5 Stars</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">All Right Reserved @ React Shopping</footer>
    </div>
  );
}

export default App;
