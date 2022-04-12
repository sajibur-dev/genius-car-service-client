// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';
import styles from './Signup.module.css';

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const { createUserWithEmailAndPassword } = useFirebase(email,password)

    const handleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword()
    }
    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email : </label>
                <br />
                <input type="email" onBlur={(e) => setEmail(e.target.value)} name="email" id="password" required />
                <br /><br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" onBlur={(e) => setPassword(e.target.value)} name="password" id="password" required />
                <br /><br />
                <input type="submit" value="signup" />
            </form>
        </div>
    );
};

export default Signup;