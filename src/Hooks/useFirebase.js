import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";


const useFirebase = (email,password) => {
    createUserWithEmailAndPassword(auth,email,password)
    .then((result) => {
        console.log(result.user);
    })
    .catch((error) => {
        console.log(error.message);
    }) 

    return { createUserWithEmailAndPassword }

}

export default useFirebase;