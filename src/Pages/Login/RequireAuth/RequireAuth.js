import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase';

const RequireAuth = ({children}) => {
    const [user,loading] =  useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <p>loading ...</p>
    }
    console.log(user)

    if(!user){
       return  <Navigate to='/login' state={{from : location}} replace/>
    }
    if(user.providerData[0].providerId === 'password' && !user.emailVerified){
        return (
            <div>
                <h1>user does'nt varified</h1>
            </div>
        )
    }
    return children;
};

export default RequireAuth;