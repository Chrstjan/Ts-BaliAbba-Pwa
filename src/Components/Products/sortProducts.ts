import { Products, SupProductCategory } from "../../Utils/interface.js";
import { buildProductDetails } from "./buildProductDetails.js";
import { buildSubCategories } from "./buildSubCategories.js";
import { allProductsArray } from "./receivedProducts.js";

import { sortProductSubCategories } from "./sortProductSubCategories.js";
import {
  sortProductSupCategories,
  supCategoryArray,
} from "./sortProductSupCategories.js";

//Issue was the missing [] (this caused it to only take 1 data object and not the array of objects)
export const sortProducts = async (products: Products[]) => {
  sortProductSubCategories(products);
  sortProductSupCategories();
};

export const productCallback = async (clickedProduct: string) => {
  console.log(clickedProduct);
  allProductsArray.map((product: Products) => {
    if (product.title === clickedProduct) {
      buildProductDetails(product);
    } else {
      // console.error("Product not found!");
    }
  });
};

export const productCategoryCallback = async (clickedCategory: string) => {
  supCategoryArray.map((supCategory: SupProductCategory) => {
    if (supCategory.supCategoryName === clickedCategory) {
      buildSubCategories(
        supCategory.supCategoryName,
        supCategory.subCategories
      );
    } else {
    }
  });
};
