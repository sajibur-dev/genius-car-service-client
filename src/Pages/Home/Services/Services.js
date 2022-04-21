import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import styles from './Services.module.css';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then((res) => res.json())
        .then((data) => setServices(data))
    },[])
    return (
        <div className={styles.services}>
            <h1 className={styles.servicesTitle}>Services</h1>
            <div className={styles.servicesContainer}>
                {
                    services.map((service) => <Service key={service._id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;