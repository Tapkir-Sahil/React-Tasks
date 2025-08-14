import React from 'react';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      phone: "123-456-7890",
      address: "Pune, Maharashtra"
    };
  }

  render() {
    return (
      <div className="container mt-4">
        <h2 className="text-center mb-4">Contact Us</h2>
        
        <div className="card p-3">
          <div className="row align-items-center">
            
            <div className="col-md-6 text-center">
              <h3>Contact Us</h3>
              <p className="card-text">Phone: {this.state.phone}</p>
              <p className="card-text">Address: {this.state.address}</p>
            </div>

            <div className="col-md-6 text-center">
              <img 
                className="img-fluid rounded" 
                src="Contact.jpg" 
                alt="Contact Us" 
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
