import {
  Products,
  SubCategory,
  SupProductCategory,
} from "../../Utils/interface.js";
import { buildCategoryProducts } from "./buildCategoryProducts.js";
import { buildFeaturedProducts } from "./buildFeaturedProducts.js";
import { buildProductDetails } from "./buildProductDetails.js";
import { buildSubCategories } from "./buildSubCategories.js";
import {
  sortCategoryCallback,
  sortSubCategoryName,
} from "./productSubCategories.js";
import {
  allProductsArray,
  randomlySelectedProducts,
} from "./receivedProducts.js";

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
    if (supCategory.supCategoryName == clickedCategory) {
      buildSubCategories(
        supCategory.supCategoryName,
        supCategory.subCategories
      );
    } else {
    }
  });
};

export const sortCategoryName = async (clickedSubCategory: string) => {
  sortCategoryCallback(clickedSubCategory);
};

export const sortSubCategoryNames = async (clickedSubCategory: string) => {
  sortSubCategoryName(clickedSubCategory);
};

export const subCategoryCallback = async (clickedSubCategory: string) => {
  supCategoryArray.map((supCategory: SupProductCategory) => {
    supCategory.subCategories.subCategoriesList.map(
      (subCategory: SubCategory) => {
        if (subCategory.subCategoryName === clickedSubCategory) {
          buildCategoryProducts(subCategory.subCategoryProducts);
        }
      }
    );
  });
};

export const navigateToLanding = async () => {
  console.log("Going Home!");
  buildFeaturedProducts(randomlySelectedProducts);
  sortProducts(allProductsArray);
};
