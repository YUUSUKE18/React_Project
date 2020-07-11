import React from "react";
import data from "../data/data";
import { Link } from "react-router-dom";

const ProductScreen = (props) => {
  console.log(props.match.params.id);
  const product = data.products.find((x) => x.id === props.match.params.id);

  return (
    <div>
      <div className="productscreen-link">
        <Link to="/">Back to Home</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h3>{product.name}</h3>
            </li>
            <li>
              {product.rating} stars {product.numreviews} Reviews
            </li>
            <li>Price : $ {product.price}</li>
            <li>
              <div>
                Description
                <p>{product.description}</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: {product.price}</li>
            <li>Status: {product.status}</li>
            <li>
              Quantity:
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <button className="cart-btn">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
