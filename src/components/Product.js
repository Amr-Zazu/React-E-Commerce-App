import { Link } from "react-router-dom";

function Product(props) {
  const { product, showButton } = props;
  return (
    <>
      <div className="card mb-3">
        <img
          src={product.image}
          style={{ height: "300px" }}
          className="card-img-top mw-75 m-auto d-block p-3"
          alt={product.description}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p>Price : {product.price}$</p>
          {showButton && (
            <Link
              to={`product/${product.id}`}
              className="btn btn-primary m-auto d-block w-50"
            >
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
