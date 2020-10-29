import UserLogin from "../assets/undraw_businessman_97x4.svg";

import { Login } from "./login";
import { Register } from "./register";

import { useContext } from "react";
import { ComponentContext } from "./ComponentContext";

export default function Landing() {
  const { Component } = useContext(ComponentContext);

  return (
    <div className="flex flex-row w-full h-full bg-gray-100">
      {/* tab 1 */}
      <div
        className="flex flex-col w-6/12 h-screen"
        style={{ backgroundImage: `url('${UserLogin}')` }}
      >
        <h2 className="mx-auto mt-10 text-2xl text-blue-800 font-bold font-mono mb-auto">
          Totally an Actual Business
        </h2>

        <footer className="mx-auto mb-3 text-base italic text-blue-800 font-extrabold">
          © {new Date().getFullYear()} Golang,GraphQL,React,Nextjs,Tailwind Auth
          | Designed by <a href="http://www.muguku.co.ke/">www.muguku.co.ke</a>
        </footer>
      </div>

      {/* tab 2 */}
      <div className="flex flex-col w-6/12 h-screen">
        {/* Toggle Login and Register Forms */}
        {Component === "LOGIN_COMPONENT" && <Login />}
        {Component === "REGISTER_COMPONENT" && <Register />}
      </div>
    </div>
  );
}
