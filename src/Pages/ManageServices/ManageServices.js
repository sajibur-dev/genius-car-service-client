import React from 'react';
import useServices from '../../Hooks/useServices';

const ManageServices = () => {
    const [services,setServices] =  useServices();
    const deleteService = (id) => {
        const url = `http://localhost:5000/service/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then((res) => res.json())
        .then((data) => {
            const remaing = services.filter((service) => service._id !== id);
            setServices(remaing)
        })
    }
    return (
        <div>
            {
                services.map((service) => <li key={service._id}>{service.name} <button onClick={() => deleteService(service._id)}>X</button> </li>)
            }
        </div>
    );
};

export default ManageServices;