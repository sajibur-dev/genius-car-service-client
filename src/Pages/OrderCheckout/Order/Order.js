import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrvate from '../../../api/axiosPrivate';
import auth from '../../../firebase';

const Order = () => {
    const [orders,setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user?.email;
        axiosPrvate.get(`https://powerful-sands-64241.herokuapp.com/orders?email=${email}`)
        .then((res) => setOrders(res.data))
        .catch((err) => {
            console.log(err);
            if(err.response.status === 401 || err.response.status === 403){
                signOut(auth);
                navigate('/login');
            }
        })
    },[navigate,user?.email])
    return (
        <div className='w-50 mx-auto'>
            <h1 className='my-5'>Your orders :</h1>
            {
                orders.map((order) => <div key={order._id}>
                    <p>{order.service}</p>
                </div>)
            }
        </div>
    );
};

export default Order;