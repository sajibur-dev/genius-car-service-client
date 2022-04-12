import React, { useState } from 'react';
import styles from './Login.module.css';



const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
    }
    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email : </label>
                <br />
                <input type="email" onBlur={(e) => setEmail(e.target.value)} name="email" id="password" required />
                <br /><br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" onBlur={(e) => setPassword(e.target.value)} name="password" id="password" required />
                <br /><br />
                <input type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;