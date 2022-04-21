import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const [service, setService] = useState({});
  const { serviceId } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  console.log(service);
  return (
    <div>
      <h1>this is service deatail {service.name}</h1>
      <p>Price : {service.price}</p>

    </div>
  );
};

export default ServiceDetail;
