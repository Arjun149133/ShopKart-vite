import React from "react";
import FormInput from "../components/FormInput";
import { Link, Form, redirect, useNavigate } from "react-router-dom";
import SubmitBtn from "../components/SubmitBtn";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/cart/userSlice";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const respose = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(respose.data));
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("welcome guest user");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("guest user login error. please try later.");
    }
  };

  return (
    <section className=" h-screen grid place-items-center">
      <Form
        method="post"
        className=" card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className=" text-center text-3xl font-bold">Login</h4>
        <FormInput type="email" label="email" name="identifier" />
        <FormInput type="password" label="password" name="password" />
        <div className=" mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button
          type="button"
          className=" btn btn-secondary btn-block"
          onClick={loginAsGuestUser}
        >
          {" "}
          Guest User{" "}
        </button>
        <p className=" text-center">
          Not a member yet?{" "}
          <Link
            to="/register"
            className=" ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
