import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// local
import { inputError } from "../../utils/inputError.js";

export default function Login() {
  const { register, handleSubmit, errors, getValues } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="container login-component">
      <div className="form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className={errors?.name_or_email ? "input-error" : undefined}
            type="text"
            placeholder="username or email"
            name="name_or_email"
            ref={register({
              required: inputError(
                true,
                "Sorry. Cannot log in without a username or email."
              )
            })}
          />
          {errors?.name_or_email?.type && (
            <p className="error">{errors?.name_or_email?.message}</p>
          )}

          <input
            className={errors?.password ? "input-error" : undefined}
            type="password"
            placeholder="password"
            name="password"
            ref={register({
              required: inputError(
                true,
                "Sorry. Cannot log in without a password."
              ),
              validate: {
                notUsername: value =>
                  value !== getValues().username ||
                  "Your password did not match your username"
              }
            })}
          />
          {errors?.password?.type && (
            <p className="error">{errors?.password?.message}</p>
          )}
          <div className="submit btn">
            <button type="submit">
              <strong>Login</strong>
            </button>
            <Link className="form-link" to="/register">
              Need an account?
            </Link>
          </div>
        </form>
      </div>
      <img src="assets/groaLogo.png" alt="Groa's Logo" id="logo" />
    </div>
  );
}
