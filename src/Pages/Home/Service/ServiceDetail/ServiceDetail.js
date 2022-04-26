import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useServiceDetails from "../../../../Hooks/useServiceDetails";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const navigate = useNavigate();
  return (
    <div>
      <h1>this is service deatail {service.name}</h1>
      <p>Price : {service.price}</p>
      <button onClick={() => navigate(`/checkout/${serviceId}`)}>place order</button>
    </div>
  );
};

export default ServiceDetail;
