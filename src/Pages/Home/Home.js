import React from 'react';
import Experts from './Experts/Experts';
import styles from './Home.module.css';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className={styles.home}>
            <Services/>
            <Experts/>
        </div>
    );
};

export default Home;