import UserLogin from "../assets/undraw_businessman_97x4.svg";

export function Landing({ children }) {
  return (
    <div className="flex flex-row w-full h-full bg-gray-100">
      <div className="flex flex-col lg:flex-row xl:flex-row w-full h-full">
        {/* tab 1 */}
        <div
          className="hidden xl:flex lg:flex w-full lg:w-6/12 xl:w-6/12 h-screen bg-no-repeat"
          style={{ backgroundImage: `url('${UserLogin}')` }}
        >
          <h2 className="mx-auto mt-10 text-2xl text-blue-800 font-bold font-mono">
            Welcome To Our Totally Real Business
          </h2>
        </div>

        {/* tab 2 */}
        <div className="flex flex-col w-full lg:w-6/12 xl:w-6/12 h-screen bg-no-repeat">
          <h2 className="flex xl:hidden lg:hidden mx-auto mt-10 text-base sm:text-3xl md:text-3xl text-blue-800 font-bold font-mono">
            Welcome to Our Totally Real Business
          </h2>
          {children}
          <footer className="flex flex-col md:flex-row lg:flex-row xl:flex-row mx-auto mb-3 text-sm lg:text-xs italic text-blue-800 font-extrabold">
            ©{new Date().getFullYear()} Go-lang, GraphQL, Next.js,
            Authentication | &nbsp;{" "}
            <a href="http://www.muguku.co.ke/">www.muguku.co.ke</a>
          </footer>
        </div>
      </div>
    </div>
  );
}
