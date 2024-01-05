import { useSelector } from "react-redux";
import { formattedPrice } from "../utils/index";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className=" card bg-base-200">
      <div className=" card-body">
        <p className=" flex justify-between text-xs border-b border-base-300 pb-2">
          <span>SubTotal</span>
          <span className=" font-medium">{formattedPrice(cartTotal)}</span>
        </p>
        <p className=" flex justify-between text-xs border-b border-base-300 pb-2">
          <span className=" font-medium">Shipping</span>
          <span>{formattedPrice(shipping)}</span>
        </p>
        <p className=" flex justify-between text-xs border-b border-base-200 pb-2">
          <span className=" font-medium">Tax</span>
          <span>{formattedPrice(tax)}</span>
        </p>
        <p className=" mt-4 flex justify-between text-sm pb-2">
          <span className=" font-bold">Order Total</span>
          <span className=" font-bold">{formattedPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};

export default CartTotals;
