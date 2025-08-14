import React from 'react';

class Services extends React.Component {
  render() {
    return (
      <div className="container mt-4">
        <h2 className="mb-4">Our Services</h2>

        <div className="row">

          <div className="col-md-4">
            <div className="card p-3">
              <img className="card-img-top" src="logo192.png" alt="service 1" />
              <div className="card-body">
                <p className="card-text">1. {this.props.serviceData.service1}</p>
                <p className="card-text">2. {this.props.serviceData.service2}</p>
                <p className="card-text">3. {this.props.serviceData.service3}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <img className="card-img-top" src="logo192.png" alt="service 2" />
              <div className="card-body">
                <p className="card-text">1. {this.props.serviceData.service1}</p>
                <p className="card-text">2. {this.props.serviceData.service2}</p>
                <p className="card-text">3. {this.props.serviceData.service3}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <img className="card-img-top" src="logo192.png" alt="service 3" />
              <div className="card-body">
                <p className="card-text">1. {this.props.serviceData.service1}</p>
                <p className="card-text">2. {this.props.serviceData.service2}</p>
                <p className="card-text">3. {this.props.serviceData.service3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
  }
export default Services;