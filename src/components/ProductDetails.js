import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const api_url = "https://fakestoreapi.com/products";
  let params = useParams();

  console.log(params);

  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((productDetails) => setProductDetails(productDetails));
  }, []);

  return (
    <>
      <div className="col-4 m-auto mt-3">
        <Product product={productDetails} showButton={false} />
      </div>
    </>
  );
}

export default ProductDetails;
