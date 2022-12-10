import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormGroup, Button } from "react-bootstrap";

const FormUsers = ({ createUser }) => {
  const { register, handleSubmit } = useForm();
  const submitForm = (data) => {
    createUser(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <label htmlFor="">Email: </label>
        <input type="email" {...register("email")} />
      </div>
      <div>
        <label htmlFor="">Password: </label>
        <input type="password" {...register("password")} />
      </div>
      <div>
        <label htmlFor="">First Name: </label>
        <input type="text" {...register("first_name")} />
      </div>
      <div>
        <label htmlFor="">Last Name: </label>
        <input type="text" {...register("last_name")} />
      </div>
      <div>
        <label htmlFor="">Birth Date: </label>
        <input type="date" {...register("birthday")} />
      </div>
      <div>
        <button>
          <span>Crear Usuario</span>
        </button>
      </div>
    </form>
  );
};

export default FormUsers;
