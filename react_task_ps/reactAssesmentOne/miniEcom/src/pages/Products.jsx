import { NavLink } from "react-router-dom";
import products from "../data/product";

export default function Products() {
  return (
    <div className="container">
      <h2 className="mb-4">Products</h2>
      <div className="row">
        {products.map((p) => (
          <div className="col-md-4 mb-3" key={p.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">Price: ₹{p.price}</p>
                <NavLink to={`/products/${p.id}`} className="btn btn-primary">
                  View Details
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
