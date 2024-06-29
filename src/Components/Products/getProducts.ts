import { myFetchData } from "../../Utils/apiUtils.js";
import { receivedProducts } from "./receivedProducts.js";

export const getAllProducts = async () => {
  const productEndpoint = "https://dummyjson.com/products?limit=0";
  const data = await myFetchData(productEndpoint);
  receivedProducts(data);
};
