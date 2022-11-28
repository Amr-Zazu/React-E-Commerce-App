import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  // const api_url = "https://api.escuelajs.co/api/v1/products";
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  const getProductsInCategory = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <div className="text-center mb-3">
          <button
            onClick={() => {
              getProducts();
            }}
            className="btn btn-info m-2 p-3"
          >
            All
          </button>
          {categories.map((category) => {
            return (
              <button
                key={category}
                onClick={() => {
                  getProductsInCategory(category);
                }}
                className="btn btn-info m-2 p-3"
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
