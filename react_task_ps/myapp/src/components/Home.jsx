import React from "react";

function Home() {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div
        className="card text-center shadow-lg"
        style={{ width: "100%", height: "35%" }}
      >
        <img
          src="img1.jpg" 
          className="card-img-top"
          alt="welcome"
          style={{ height: "400px", objectFit: "fit" }}
        />
        <div className="card-body">
          <h4 className="card-title">Welcome to MyApp</h4>
          <p className="card-text">
            This is a simple React project built with <b>Props</b>, <b>State</b>
            , and <b>Bootstrap</b>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
