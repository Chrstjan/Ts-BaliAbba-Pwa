import { myFetchData } from "../../Utils/apiUtils.js";
import { receivedCategories } from "./receivedCategories.js";

export const getAllCategories = async () => {
  const categoriesEndpoint =
    "https://dummyjson.com/products/categories?limit=0";
  const data = await myFetchData(categoriesEndpoint);
  receivedCategories(data);
};
