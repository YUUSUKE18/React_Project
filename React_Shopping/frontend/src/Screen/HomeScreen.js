import React from "react";
import { Link } from "react-router-dom";
import data from "../data/data";

const HomeScreen = (props) => {
  return (
    <div>
      <ul className="products">
        {data.products.map((product) => (
          <li key={product.id}>
            <div className="product">
              <Link to={"/product/" + product.id}>
                <img
                  className="product-image"
                  src={product.image}
                  alt="product"
                />
              </Link>
              <div className="product-name">
                <Link to={"/product/" + product.id}>{product.name}</Link>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">$ {product.price}</div>
              <div className="product-rating">
                {product.rating} Stars {product.review}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeScreen;
