import { getAllCategories } from "./Components/Categories/getCategories.js";
import { getAllProducts } from "./Components/Products/getProducts.js";

const initPage = async () => {
  getAllProducts();
  getAllCategories();
};

initPage();
