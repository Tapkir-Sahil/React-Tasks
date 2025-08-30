import { useParams, useNavigate } from "react-router-dom";
import products from "../data/product";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h3 className="text-center">Product not found</h3>;

  return (
    <div className="container">
      <div className="card shadow p-4">
        <h2>{product.name}</h2>
        <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <button 
          className="btn btn-secondary mt-3"
          onClick={() => navigate("/products")}
        >
          Back to Products
        </button>
      </div>
    </div>
  );
}
