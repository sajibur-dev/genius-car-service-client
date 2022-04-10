import React from 'react';
import styles from './Home.module.css';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className={styles.home}>
            <Services/>
        </div>
    );
};

export default Home;