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
            className={errors?.email ? "input-error" : undefined}
            type="text"
            placeholder="email"
            name="email"
            ref={register({
              required: inputError(true, "What's your email?"),
              pattern: inputError(/^\S+@\S+$/i, "Must be a valid email.")
            })}
          />
          {errors?.email?.type && (
            <p className="error">{errors?.email?.message}</p>
          )}

          <input
            className={errors?.username ? "input-error" : undefined}
            type="text"
            placeholder="username"
            name="username"
            ref={register({
              required: inputError(true, "What would you like to be called?"),
              minLength: inputError(4, "Must be at least 4 characters long."),
              maxLength: inputError(12, "Must be less than 13 characters."),
              pattern: inputError(
                /^[a-zA-Z0-9]\S*$/i,
                "Username cannot contain spaces."
              )
            })}
          />
          {errors?.username?.type && (
            <p className="error">{errors?.username?.message}</p>
          )}

          <input
            className={errors?.password ? "input-error" : undefined}
            type="password"
            placeholder="password"
            name="password"
            ref={register({
              required: inputError(true, "Please enter a password."),
              minLength: inputError(8, "Must be at least 8 characters long."),
              maxLength: inputError(
                15,
                "Cannot be more than 15 characters long."
              ),
              validate: {
                oneLetter: value =>
                  /^(?=.*[a-z])(?=.*[A-Z])/i.test(value) ||
                  "Must contain one letter character.",
                oneNumber: value =>
                  /^(?=.*[0-9])/i.test(value) || "Must contain one number.",
                oneSpecial: value =>
                  /^(?=.*[@#$%^&+=!])/i.test(value) ||
                  "Must contain one special character."
              }
            })}
          />
          {errors?.password?.type && (
            <p className="error">{errors?.password?.message}</p>
          )}

          <input
            className={errors?.confirm_password ? "input-error" : undefined}
            type="password"
            placeholder="confirm password"
            name="confirm_password"
            ref={register({
              required: inputError(true, "Please confirm your password."),
              validate: {
                matchPassword: value =>
                  value === getValues().password ||
                  "These passwords do no match."
              }
            })}
          />
          {errors?.confirm_password?.type && (
            <p className="error">{errors?.confirm_password?.message}</p>
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
