import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { customFetch } from "../utils/index";
import FeaturedProducts from "../components/FeaturedProducts";

const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};

export const loader = (querClient) => async () => {
  const response = await querClient.ensureQueryData(featuredProductsQuery);
  const products = response.data.data;
  return { products };
};

const Dashboard = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Dashboard;
