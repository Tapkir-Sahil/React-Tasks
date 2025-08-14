import React from 'react';

function About(props) {
  return (
    <div className="container mt-4">
      <h2>About Us</h2>

      <div className="card p-3 mt-3">
        <div className="row g-0 align-items-center">
          <div className="col-md-4">
            <img className="img-fluid rounded-start" src="about.jpg" alt="About" />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.userData.name}</h5>
              <p className="card-text">Email: {props.userData.email}</p>
              <p className="card-text">Role: {props.userData.role}</p>
              <p className="card-text">
                Hi, I am {props.userData.name}. I am passionate about web development and enjoy learning new technologies to build useful projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
