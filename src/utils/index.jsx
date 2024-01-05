import axios from "axios";

export const customFetch = axios.create({
  baseURL: "https://strapi-store-server.onrender.com/api/",
});

export const formattedPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 10).toFixed(2));
  return dollarsAmount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={{ amount }} value={amount}>
        {amount}
      </option>
    );
  });
};
