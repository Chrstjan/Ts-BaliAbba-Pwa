import { productCategory } from "../../Utils/enums.js";
import {
  Products,
  SubCategory,
  SupProductCategory,
} from "../../Utils/interface.js";
import { buildCategoryProducts } from "./buildCategoryProducts.js";
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

export const sortCategoryName = async (clickedSubCategory: string) => {
  const sortCategoryCallback = async (subCategory: string) => {
    //Category is hardcoded right now (might fix later)
    let productSubCategory: string;
    switch (subCategory) {
      case productCategory.homeDecoration:
        productSubCategory = "Home Decorations";
        subCategoryCallback(productSubCategory);
        break;

      case productCategory.furniture:
        productSubCategory = "Furniture";
        subCategoryCallback(productSubCategory);
        break;

      case productCategory.beauty:
        productSubCategory = "Beauty Products";
        subCategoryCallback(productSubCategory);
        break;

      case productCategory.fragrances:
        productSubCategory = "Fragrances";
        subCategoryCallback(productSubCategory);
        break;

      case productCategory.skinCare:
        productSubCategory = "Skin Care";
        subCategoryCallback(productSubCategory);
        break;

      case productCategory.kitchenAccessories:
        productSubCategory = "Kitchen Accessories";
        subCategoryCallback(productSubCategory);
        break;

      case productCategory.groceries:
        productSubCategory = "Groceries";
        subCategoryCallback(productSubCategory);
        break;

      case productCategory.laptops:
        productSubCategory = "Laptops";
        subCategoryCallback(productSubCategory);
        break;

      case productCategory.smartphones:
        productSubCategory = "Smartphones";
        subCategoryCallback(productSubCategory);
        break;

      case productCategory.mobileAccessories:
        productSubCategory = "Mobile Accessories";
        subCategoryCallback(productSubCategory);
        break;

      case productCategory.tablets:
        productSubCategory = "Tablets";
        subCategoryCallback(productSubCategory);
        break;
      default:
        console.error("Match not found!");
        break;
    }
  };
  sortCategoryCallback(clickedSubCategory);
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
