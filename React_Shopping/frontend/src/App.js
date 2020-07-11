import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from "./Screen/ProductScreen";

function App() {
  const sidebarOpen = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <Router>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={sidebarOpen}>&#9776;</button>
            <Link to="/">
              <h1>React Shopping</h1>
            </Link>
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
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
          </div>
        </main>
        <footer className="footer">All Right Reserved @ React Shopping</footer>
      </div>
    </Router>
  );
}

export default App;
