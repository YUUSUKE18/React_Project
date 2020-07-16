import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProduct } from "../actions/productActions";

const HomeScreen = (props) => {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    //real run
    dispatch(listProduct());
    return () => {
      //cleanup;
    };
  }, []);
  return loading ? (
    <div>Loading....</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <ul className="products">
        {products.map((product) => (
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
