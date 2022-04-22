import React from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';
import styles from './Services.module.css';

const Services = () => {
    const [services] = useServices();
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