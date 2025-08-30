import {NavLink} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm py-3">
      <div className="container">
        {/* Brand */}
        {/* <a className="navbar-brand fw-bold fs-4" href="#">
          MiniBasket
        </a> */}
        <NavLink
                className={({ isActive }) =>
                  "navbar-brand fw-bold fs-4" + (isActive ? " active fw-bold" : "")
                }
                to="/"
              >
                MiniBasket
              </NavLink>
        {/* Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item mx-2">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold" : "")
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold" : "")
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
      
            {/* Cart Icon with Badge */}
            <li className="nav-item ms-lg-3 position-relative">
              <a className="nav-link" href="#">
                <i className="bi bi-cart3 fs-5"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
