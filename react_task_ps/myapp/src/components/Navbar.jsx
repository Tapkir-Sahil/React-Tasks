import React from "react";

function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">MyApp</a>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar