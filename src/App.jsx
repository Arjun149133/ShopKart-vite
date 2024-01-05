import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import ErrorElement from "./components/ErrorElement";
import { loader as landingLoader } from "./pages/Dashboard";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";
import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";
import { action as checkoutAction } from "./components/CheckoutForm";
import Cart from "./pages/Cart";
import { store } from "./store";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: landingLoader(queryClient),
        errorElement: ErrorElement,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader(queryClient),
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader(queryClient),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store, queryClient),
      },
      {
        path: "/orders",
        element: <Orders />,
        loader: ordersLoader(store, queryClient),
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
    action: registerAction,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
    action: loginAction(store),
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
