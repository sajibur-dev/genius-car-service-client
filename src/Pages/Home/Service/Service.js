import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const navigate =  useNavigate()
  const {_id,name, img, price, description } = service;

  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={img} className="card-img-top w-100" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <p className="card-text">
          {description}
        </p>
        <button onClick={() =>navigate(`/service/${_id}`) } className="btn btn-primary">
          see details
        </button>
      </div>
    </div>
  );
};

export default Service;
