import Head from "next/head";
import { useContext } from "react";
import { ComponentContext } from "./ComponentContext";
import { useForm } from "react-hook-form";

export function Register() {
  const { Component, SetComponent } = useContext(ComponentContext);
  const { register, handleSubmit, errors, getValues } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col w-full sm:w-full md:w-full lg:w-10/12 xl:w-10/12 mx-auto my-auto px-4 md:px-12 lg:px-12 xl:px-12 py-5 rounded-lg border border-gray-300 bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Head>
        <title>Business | Register</title>
      </Head>
      <div className="flex flex-row flex-no-wrap mx-auto">
        <h4 className=" my-auto text-lg ml-3 text-blue-800">Register Now</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 italic my-auto text-red-600"
        >
          <path
            fillRule="evenodd"
            d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="flex flex-row flex-no-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 mr-1 italic my-auto text-red-600"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>

        <label htmlFor="first_name" className="italic my-auto text-blue-800">
          first name
        </label>
      </div>

      <input
        type="text"
        placeholder="John"
        id="first_name"
        name="first_name"
        className="h-8 mb-2 pl-2 rounded-lg border border-gray-400"
        ref={register({ required: true })}
      />
      {errors.first_name && (
        <p className="text-red-600 text-sm">First Name can't be blank </p>
      )}

      <div className="flex flex-row flex-no-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 mr-1 italic my-auto text-red-600"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>

        <label htmlFor="last_name" className="italic my-auto text-blue-800">
          last name
        </label>
      </div>

      <input
        type="text"
        placeholder="Doe"
        id="last_name"
        name="last_name"
        className="h-8 mb-2 pl-2 rounded-lg border border-gray-400"
        ref={register({ required: true })}
      />
      {errors.last_name && (
        <p className="text-red-600 text-sm">Last Name can't be blank </p>
      )}

      <div className="flex flex-row flex-no-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 mr-1 italic my-auto text-red-600"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>

        <label htmlFor="email" className="italic my-auto text-blue-800">
          email
        </label>
      </div>

      <input
        type="email"
        placeholder="example@mail.com"
        id="email"
        name="email"
        className="h-8 mb-2 pl-2 rounded-lg border border-gray-400"
        ref={register({
          required: true,
          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      {errors.email && (
        <p className="text-red-600 text-sm">Email must be valid </p>
      )}

      <div className="flex flex-row flex-no-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 mr-1 italic my-auto text-red-600"
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>

        <label htmlFor="phone_number" className="italic my-auto text-blue-800">
          phone number
        </label>
      </div>

      <input
        type="tel"
        placeholder="+25472012345678"
        id="phone_number"
        name="phone_number"
        className="h-8 mb-2 pl-2 rounded-lg border border-gray-400"
        ref={register({ required: true, maxLength: 13, minLength: 10 })}
      />
      {errors.phone_number && (
        <p className="text-red-600 text-sm">Phone Number must be valid </p>
      )}

      <div className="flex flex-row flex-no-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-4 mr-1 italic my-auto  text-red-600"
        >
          <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
        </svg>

        <label htmlFor="password" className="italic my-auto text-blue-800">
          password
        </label>
      </div>

      <input
        type="password"
        placeholder="password"
        id="password"
        name="password"
        className="h-8 mb-2 pl-2 rounded-lg border border-gray-400"
        ref={register({
          required: true,
          minLength: 8,
          pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        })}
      />
      {errors.password && (
        <p className="text-red-600 text-sm">
          Password must have a minimum of eight characters, one letter, one
          number and one special character
        </p>
      )}

      <div className="flex flex-row flex-no-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-4 mr-1 italic my-auto  text-red-600"
        >
          <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
        </svg>

        <label
          htmlFor="confirm_password"
          className="italic my-auto text-blue-800"
        >
          confirm password
        </label>
      </div>

      <input
        type="password"
        placeholder="confirm password"
        id="confirm_password"
        name="confirm_password"
        className="h-8 mb-2 pl-2 rounded-lg border border-gray-400"
        ref={register({
          required: true,
          validate: {
            passEqual: (value) =>
              value === getValues().password || "Password confirmation error!",
          },
        })}
      />
      {errors.confirm_password && (
        <p className="text-red-600 text-sm">Passwords must match </p>
      )}

      <div className="flex flex-row flex-no-wrap justify-between">
        <div className="flex flex-row flex-no-wrap my-auto">
          <input
            type="checkbox"
            className="h-10 my-auto text-red-600"
            id="checky"
            name="checky"
            ref={register({ required: true })}
          />

          <label
            htmlFor="checky"
            className="ml-2 my-auto italic text-blue-800 text-sm"
          >
            Agree to terms and conditions
          </label>
        </div>

        <span
          className="my-auto italic text-blue-800 text-sm cursor-pointer"
          onClick={() => {
            if (Component !== "LOGIN_COMPONENT") {
              SetComponent("LOGIN_COMPONENT");
            }
          }}
        >
          Login Instead
        </span>
      </div>
      {errors.checky && (
        <p className="text-red-600 text-sm">
          Must Agree to the terms and conditions
        </p>
      )}

      <button
        type="submit"
        className="w-1/4 h-12 bg-red-600 mx-auto text-white rounded"
      >
        Register
      </button>
    </form>
  );
}
