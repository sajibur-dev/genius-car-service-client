import axios from "axios";
import React from "react";
import { ToastContainer } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase";
import useServiceDetails from "../../Hooks/useServiceDetails";

const OrderCheckout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);

  // const [user,setUser] = useState({
  //     name:'sajibur rahman',
  //     email:'sajib@gmail.com',
  //     service:'OIL CHANGE',
  //     phone:'0186666666',
  //     address:"dhaka",

  // });

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };

    axios.post('https://powerful-sands-64241.herokuapp.com/order',order)
    .then((res) => {
        console.log(res.data)
        const data = res.data;
        if(data.acknowledged){
          toast('data is saved in database');
          e.target.reset()
        }
    })
  };

  return (
    <div className="text-center">
      <h1>please order {service.name} </h1>
      <form onSubmit={handlePlaceOrder}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={user?.displayName}
          required
          readOnly
          disabled
        />{" "}
        <br />
        <br />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={user?.email}
          required
          readOnly
          disabled
        />{" "}
        <br />
        <br />
        <input
          type="text"
          name="service"
          placeholder="service"
          value={service.name}
          required
          readOnly
        />{" "}
        <br />
        <br />
        <input
          type="text"
          autoComplete="off"
          name="address"
          placeholder="address"
        />
        <br />
        <br />
        <input
          type="text"
          autoComplete="off"
          name="phone"
          placeholder="phone"
        />{" "}
        <br />
        <br />
        <input type="submit" value="submit" />
        <br />
        <br />
      </form>
      <ToastContainer/>
    </div>
  );
};

export default OrderCheckout;
