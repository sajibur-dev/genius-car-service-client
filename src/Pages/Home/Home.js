import React from 'react';
import Banner from './Banner/Banner';
import Experts from './Experts/Experts';
import styles from './Home.module.css';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className={styles.home}>
            <Banner/>
            <Services/>
            <Experts/>
        </div>
    );
};

export default Home;