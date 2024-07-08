import { products } from "../../Utils/interface.js";

export const receivedProducts = async (products: products) => {
  sortProducts(products);
};

export const sortProducts = async (products: products) => {
  console.log(products);
}