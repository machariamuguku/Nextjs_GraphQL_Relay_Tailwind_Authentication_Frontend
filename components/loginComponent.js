import Head from "next/head";
import { useForm } from "react-hook-form";
import Link from "next/link";

export function LoginComponent() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col w-full sm:w-full md:w-full lg:w-10/12 xl:w-10/12 mx-auto my-auto rounded-lg border border-gray-300 bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col w-full mx-auto my-auto px-4 md:px-12 lg:px-12 xl:px-12 py-5 pt-12 pb-6">
        <Head>
          <title>Business | Login</title>
        </Head>
        <div className="flex flex-row flex-no-wrap mx-auto">
          <h4 className=" my-auto text-lg ml-3 text-blue-800">Login Now</h4>
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
            // match email address
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
            // match password (8 characters, one letter, one number, one special character)
            pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          })}
        />
        {errors.password && (
          <p className="text-red-600 text-sm">
            Password must have a minimum of eight characters, one letter, one
            number and one special character
          </p>
        )}

        <div className="flex flex-row flex-no-wrap justify-between">
          <div className="flex flex-row flex-no-wrap my-auto">
            <input
              type="checkbox"
              className="h-10 my-auto text-red-600"
              id="checky"
              name="checky"
              ref={register}
            />

            <label
              htmlFor="checky"
              className="ml-2 my-auto italic text-blue-800"
            >
              Stay Signed In
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-1/4 h-12 bg-red-600 mx-auto text-white rounded mb-auto pb-auto"
        >
          Login
        </button>
      </div>
      {/* float this down */}
      <div className="flex flex-row flex-no-wrap justify-between px-3 pb-2">
        <div className="flex flex-row flex-no-wrap my-auto">
          <Link href="/forgot/password">
            <a className="my-auto italic text-blue-800 text-sm cursor-pointer">
              forgot password?
            </a>
          </Link>
        </div>

        <Link href="/register">
          <a className="my-auto italic text-blue-800 text-sm cursor-pointer">
            Register?
          </a>
        </Link>
      </div>
    </form>
  );
}
