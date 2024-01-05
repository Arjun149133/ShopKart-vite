import { useEffect, useState } from "react";
import { FaCartPlus, FaBarsStaggered } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, toggleTheme } from "../features/cart/userSlice";
import { clearCart } from "../features/cart/cartSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userState.user);

  const theme = useSelector((state) => state.userState.theme);
  const isDartTheme = theme === "dark";

  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  };

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <nav className=" bg-gray-800 text-white">
      <div className=" navbar align-element">
        <div className=" navbar-start">
          <NavLink to="/">ShopKart</NavLink>
          <div className=" dropdown">
            <label tabIndex={0} className=" btn btn-ghost lg:hidden">
              <FaBarsStaggered className=" h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-600 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className=" navbar-center hidden lg:flex">
          <ul className=" menu menu-horizontal gap-7">
            <NavLinks />
          </ul>
        </div>
        <div className=" navbar-end">
          <div className=" flex items-center space-x-3">
            {user ? (
              <div className="flex gap-x-2 sm:gap-x-8 items-center">
                <p className="text-xs sm:text-sm">Hello, {user.username}</p>
                <button
                  className="btn btn-xs btn-outline btn-primary "
                  onClick={handleLogout}
                >
                  logout
                </button>
              </div>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Sign Up</NavLink>
              </>
            )}
          </div>
          <div className=" flex space-x-2 items-center ml-5">
            <label className=" swap swap-rotate">
              <input
                type="checkbox"
                onChange={handleTheme}
                defaultChecked={isDartTheme}
              />
              <BsSunFill className=" swap-on h-4 w-4" />
              <BsMoonFill className=" swap-off h-4 w-4" />
            </label>
            <NavLink
              to="/cart"
              className="btn btn-ghost btn-circle btn-md ml-4"
            >
              <div className=" indicator">
                <FaCartPlus className=" h-6 w-6" />
                <span className=" badge badge-sm badge-primary indicator-item">
                  {numItemsInCart}
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
