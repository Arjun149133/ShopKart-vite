import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error);
  if(error.status === 404) {
    return (
      <div className=" flex justify-center items-center h-screen flex-col space-y-7">
        <h1 className=" text-9xl font-bold">404</h1>
        <h2 className=" text-2xl font-bold">Oops, Something went Wrong!!</h2>
        <Link to="/">
          <button className=" btn btn-info hover:bg-blue-700 hover:text-white  mt-7">
            Go Back To Home Page
          </button>
        </Link>
      </div>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className=" text-center font-bold text-4xl">
        there was an error...
      </h4>
    </main>
  )
};

export default ErrorPage;
