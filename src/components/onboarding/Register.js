import React from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit, errors, getValues } = useForm();

  // will modularize later for other form use.
  function inputError(value, message) {
    return { value: value, message: message };
  }

  // will connect to submit data with
  const onSubmit = data => {
    console.log(data);
  };

  // returns all errors for input fields
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Email"
        name="email"
        ref={register({
          required: inputError(true, "email is required"),
          pattern: inputError(/^\S+@\S+$/i, "must be a valid email")
        })}
      />
      {errors?.email?.type && errors?.email?.message}

      <input
        type="text"
        placeholder="username"
        name="username"
        ref={register({
          required: inputError(true, "username is required"),
          minLength: inputError(4, "must be at least 4 characters long"),
          maxLength: inputError(12, "must be less than 13 characters"),
          pattern: inputError(
            /^[a-zA-Z0-9]\S*$/i,
            "username cannot contain spaces"
          )
        })}
      />
      {errors?.username?.type && errors?.username?.message}

      <input
        type="password"
        placeholder="password"
        name="password"
        ref={register({
          required: inputError(true, "password is required"),
          minLength: inputError(8, "must be at least 8 characters long"),
          maxLength: inputError(15, "cannot be more than 15 characters long"),
          pattern: inputError(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i,
            "must contain one uppercase character, one lower case letter, and at least 1 numerical digit, and one special character."
          )
        })}
      />
      {errors?.password?.type && errors?.password?.message}

      <input
        type="password"
        placeholder="confirm password"
        name="confirm_password"
        ref={register({
          required: inputError(true, "please confirm your password"),
          validate: {
            matchPassword: value =>
              value === getValues().password || "passwords do not match"
          }
        })}
      />
      {errors?.confirm_password?.type && errors?.confirm_password?.message}

      <button type="submit">Submit</button>
    </form>
  );
}
