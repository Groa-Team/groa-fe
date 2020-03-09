import React from "react";
import { useForm } from "react-hook-form";

// local
import { inputError } from "../../utils/inputError.js";

export default function Register() {
  const { register, handleSubmit, errors, getValues } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="container">
      <img src="assets/groaLogo.png" alt="Groa's Logo" id="logo" />
      <div className="form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            ref={register({
              required: inputError(true, "email is required"),
              pattern: inputError(/^\S+@\S+$/i, "must be a valid email")
            })}
          />
          {errors?.email?.type && (
            <p className="input-error">{errors?.email?.message}</p>
          )}

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
          {errors?.username?.type && (
            <p className="input-error">{errors?.username?.message}</p>
          )}

          <input
            type="password"
            placeholder="password"
            name="password"
            ref={register({
              required: inputError(true, "password is required"),
              minLength: inputError(8, "must be at least 8 characters long"),
              maxLength: inputError(
                15,
                "cannot be more than 15 characters long"
              ),
              pattern: inputError(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i,
                "must contain one uppercase character, one lower case letter, and at least 1 numerical digit, and one special character."
              )
            })}
          />
          {errors?.password?.type && (
            <p className="input-error">{errors?.password?.message}</p>
          )}

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
          {errors?.confirm_password?.type && (
            <p className="input-error">{errors?.confirm_password?.message}</p>
          )}
          <span>
            <button type="submit">
              <strong>Sign Up</strong>
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}
