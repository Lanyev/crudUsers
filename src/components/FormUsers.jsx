import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const defaultValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  birthday: "",
};

const FormUsers = ({ createUser, userUpdate, updateUser }) => {
  const { register, handleSubmit, reset } = useForm();

  const submitForm = (data) => {
    if (userUpdate) {
      updateUser(userUpdate.id, data);
    } else {
      createUser(data);
    }
    reset(defaultValues);
  };

  useEffect(() => {
    if (userUpdate) {
      reset(userUpdate);
    }
  }, [userUpdate]);

  const titleForm = userUpdate ? "Edit User" : "New User";
  const textButton = userUpdate ? "Edit User" : "Add New User";

  return (
    <form className="form__user" onSubmit={handleSubmit(submitForm)}>
      <h2>{titleForm}</h2>
      <div>
        <label htmlFor="">Email: </label>
        <input
          type="email"
          {...register("email")}
          placeholder="Enter your Email"
        />
      </div>
      <div>
        <label htmlFor="">Password: </label>
        <input
          type="password"
          {...register("password")}
          placeholder="Enter your Password"
        />
      </div>
      <div>
        <label htmlFor="">First Name: </label>
        <input
          type="text"
          {...register("first_name")}
          placeholder="Enter your First Name"
        />
      </div>
      <div>
        <label htmlFor="">Last Name: </label>
        <input
          type="text"
          {...register("last_name")}
          placeholder="Enter your Last Name"
        />
      </div>
      <div>
        <label htmlFor="">Birth Date: </label>
        <input type="date" {...register("birthday")} />
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          {textButton}
        </button>
      </div>
    </form>
  );
};

export default FormUsers;
