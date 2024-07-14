var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { buildFeaturedProducts } from "./buildFeaturedProducts.js";
import { sortProducts } from "./sortProducts.js";
export let allProductsArray = [];
export const receivedProducts = (products) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(products);
    allProductsArray = [...products.products];
    let randomlySelectedProducts = [];
    randomlySelectedProducts.push(allProductsArray[Math.floor(Math.random() * allProductsArray.length)], allProductsArray[Math.floor(Math.random() * allProductsArray.length)], allProductsArray[Math.floor(Math.random() * allProductsArray.length)], allProductsArray[Math.floor(Math.random() * allProductsArray.length)], allProductsArray[Math.floor(Math.random() * allProductsArray.length)], allProductsArray[Math.floor(Math.random() * allProductsArray.length)]);
    buildFeaturedProducts(randomlySelectedProducts);
    console.log("All Products");
    console.log(allProductsArray);
    sortProducts(allProductsArray);
});
