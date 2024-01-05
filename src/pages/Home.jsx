import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "./Dashboard";
import Loading from "../components/Loading";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";

const Home = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className=" align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default Home;
