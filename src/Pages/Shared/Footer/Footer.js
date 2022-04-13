import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p><small>copyright @ {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;