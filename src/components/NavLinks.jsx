import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
  { id: 100, url: "/", text: "home" },
  { id: 200, url: "/about", text: "about" },
  { id: 300, url: "/products", text: "Products" },
  { id: 400, url: "/cart", text: "cart" },
  { id: 500, url: "orders", text: "orders" },
  { id: 600, url: "checkout", text: "checkout" },
];

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === "checkout" || url === "orders") && !user) return null;
        return (
          <ul key={id}>
            <NavLink className="capitalize font-semibold" to={url}>
              {text}
            </NavLink>
          </ul>
        );
      })}
    </>
  );
};

export default NavLinks;
