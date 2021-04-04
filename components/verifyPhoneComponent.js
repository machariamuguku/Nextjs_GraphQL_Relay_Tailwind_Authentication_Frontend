import Head from "next/head";
import { useForm } from "react-hook-form";
import Link from "next/link";

export function VerifyPhone() {
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
          <title>Business | Verify Phone</title>
        </Head>
        <div className="flex flex-row flex-no-wrap mx-auto">
          <h4 className=" my-auto text-lg ml-3 text-blue-800">
            Verify Phone Number
          </h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 italic my-auto text-gray-400"
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
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-4 mr-1 italic my-auto  text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>

          <label htmlFor="phone_code" className="italic my-auto text-blue-800">
            phone code
          </label>
        </div>

        <input
          type="number"
          placeholder="00000"
          id="phone_code"
          name="phone_code"
          className="h-8 mb-2 pl-2 rounded-lg border border-gray-400"
          ref={register({
            required: true,
            // match numbers
            pattern: /^[0-9]+$/,
          })}
        />
        {errors.phone_code && (
          <p className="text-red-700 text-sm">phone code must be a number</p>
        )}

        <button
          type="submit"
          className="w-1/4 h-12 mx-auto text-white rounded-lg mb-auto pb-auto bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none"
        >
          Verify
        </button>
      </div>
      {/* float this down */}
      <div className="flex flex-row flex-no-wrap justify-between px-3 pb-2">
        <div className="flex flex-row flex-no-wrap my-auto">
          <span
            className="my-auto italic text-blue-800 text-sm cursor-pointer"
            onClick={(e) => console.log(e)}
          >
            resend phone code?
          </span>
        </div>
      </div>
    </form>
  );
}
