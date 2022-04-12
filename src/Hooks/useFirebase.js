import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from "react";
import auth from '../firebase';


const useFirebase  = () => {
    const [currentUser,setCurrentUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            setCurrentUser(user)
        })
        return unsubscribe;
    },[])


    const handleSignupWithEmailAndPassword = (email,password) => {
        createUserWithEmailAndPassword(auth,email,password)
        .then((result) => {
            const user = result.user;
            setCurrentUser(user)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    const handleSigninWithEmailAndPassword = (email,password) => {
        signInWithEmailAndPassword(auth,email,password)
        .then(() => {
            console.log('user will be created')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return {
        currentUser,
        handleSignupWithEmailAndPassword,
        handleSigninWithEmailAndPassword
    }
}


export default useFirebase;