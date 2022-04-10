import React from 'react';
import styles from './Service.module.css';

const Service = ({service}) => {
    const {name,img} = service;
    return (
        <div className={styles.service}>
            <img src={img} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Service;