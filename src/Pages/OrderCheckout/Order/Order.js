import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase';

const Order = () => {
    const [orders,setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        axios.get(`http://localhost:5000/orders?email=${user.email}`,{
            headers:{
                authorization:`Berer ${localStorage.getItem('accessToken')}`
            }
        })
        .then((res) => setOrders(res.data))
    },[user.email])
    return (
        <div>
            <h1>this is Order page... {orders.length}</h1>
        </div>
    );
};

export default Order;