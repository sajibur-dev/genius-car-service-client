import React from 'react';
import styles from './Service.module.css';

const Service = ({service}) => {
    const {name,img,price,description} = service;
    return (
        <div className={styles.service}>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h1>{price}$</h1>
            <p>{description}</p>
            <button className={styles.bookingBtn}>book {name}</button>
        </div>
    );
};

export default Service;