import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import styles from './Signup.module.css';

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const  { handleSignupWithEmailAndPassword }  = useFirebase()
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignupWithEmailAndPassword(email,password);
        
    }
    return (
        <div className={styles.formContainer}>
           <div>
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
            <p>Already have an account ? <Link to="/login">Login</Link></p>
           </div>
        </div>
    );
};

export default Signup;