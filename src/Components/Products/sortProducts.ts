import { Products } from "../../Utils/interface.js";

import { sortProductCategories } from "./sortProductCategories.js";
import { sortProductSupCategories } from "./sortProductSupCategories.js";

//Issue was the missing [] (this caused it to only take 1 data object and not the array of objects)
export const sortProducts = async (products: Products[]) => {
  sortProductCategories(products);
  sortProductSupCategories();
};
