import { Products } from "../../Utils/interface.js";
import { clearContainer } from "../app.js";

const app = document.getElementById("app");

export const buildProductDetails = async (product: Products) => {
  console.log(product);
  if (app) {
    clearContainer(app);
  }
};
