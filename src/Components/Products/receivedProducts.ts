import { ProductsArray, Products } from "../../Utils/interface.js";

import { buildFeaturedProducts } from "./buildFeaturedProducts.js";
import { sortProducts } from "./sortProducts.js";

export let allProductsArray: Products[] = [];

export const receivedProducts = async (products: ProductsArray) => {
  console.log(products);

  allProductsArray = [...products.products];

  let randomlySelectedProducts: Products[] = [];

  randomlySelectedProducts.push(
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)],
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)],
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)],
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)],
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)],
    allProductsArray[Math.floor(Math.random() * allProductsArray.length)]
  );

  buildFeaturedProducts(randomlySelectedProducts);
  console.log("All Products");
  console.log(allProductsArray);
  sortProducts(allProductsArray);
};
