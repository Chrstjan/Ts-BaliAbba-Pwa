import { buildLoadingAnimation } from "./Components/Misc/loadingAnimation.js";
import { getAllCategories } from "./Components/Categories/getCategories.js";
import { getAllProducts } from "./Components/Products/getProducts.js";
import { pageNavigation } from "./Components/Misc/navigation.js";

const initPage = async () => {
  buildLoadingAnimation();
  getAllProducts();
  getAllCategories();
  pageNavigation();
};

initPage();
