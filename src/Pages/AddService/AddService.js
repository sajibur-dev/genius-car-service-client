import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) =>{
      console.log(data);
      fetch('https://powerful-sands-64241.herokuapp.com/service',{
          method:'POST',
          headers : {
              'content-type' : 'application/json'
          },
          body:JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
  };

  return (
    <div className="w-50 mx-auto mt-5">
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-3" type="text" {...register("name", { required: true })} placeholder="name"/>
        <textarea className="mb-3" {...register("description", { required: true })} placeholder="description"/>
        <input className="mb-3" type="number" {...register("price", { required: true })}  placeholder="price"/>
        <input className="mb-3" type="text" {...register("img", { required: true })} placeholder="photo url"/>
        <input type="submit" value="add service" />
      </form>
    </div>
  );
};

export default AddService;
