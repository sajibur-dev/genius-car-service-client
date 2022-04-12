import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
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
    const handleSignInWithEmailAndPassword = (email,password) => {
        createUserWithEmailAndPassword(auth,email,password)
        .then((result) => {
            const user = result.user;
            setCurrentUser(user)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    return {
        currentUser,
        handleSignInWithEmailAndPassword
    }
}


export default useFirebase;