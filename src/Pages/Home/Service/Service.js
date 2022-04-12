import React from "react";

const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={img} className="card-img-top w-100" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <p className="card-text">
          {description}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Service;
