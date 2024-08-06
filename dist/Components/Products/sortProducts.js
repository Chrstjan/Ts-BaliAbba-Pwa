var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { buildCategoryProducts } from "./buildCategoryProducts.js";
import { buildFeaturedProducts } from "./buildFeaturedProducts.js";
import { buildProductDetails } from "./buildProductDetails.js";
import { buildSubCategories } from "./buildSubCategories.js";
import { sortCategoryCallback, sortSubCategoryName, } from "./productSubCategories.js";
import { allProductsArray, randomlySelectedProducts, } from "./receivedProducts.js";
import { sortProductSubCategories } from "./sortProductSubCategories.js";
import { sortProductSupCategories, supCategoryArray, } from "./sortProductSupCategories.js";
//Issue was the missing [] (this caused it to only take 1 data object and not the array of objects)
export const sortProducts = (products) => __awaiter(void 0, void 0, void 0, function* () {
    sortProductSubCategories(products);
    sortProductSupCategories();
});
export const productCallback = (clickedProduct) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(clickedProduct);
    allProductsArray.map((product) => {
        if (product.title === clickedProduct) {
            buildProductDetails(product);
        }
        else {
            // console.error("Product not found!");
        }
    });
});
export const productCategoryCallback = (clickedCategory) => __awaiter(void 0, void 0, void 0, function* () {
    supCategoryArray.map((supCategory) => {
        if (supCategory.supCategoryName == clickedCategory) {
            buildSubCategories(supCategory.supCategoryName, supCategory.subCategories);
        }
        else {
        }
    });
});
export const sortCategoryName = (clickedSubCategory) => __awaiter(void 0, void 0, void 0, function* () {
    sortCategoryCallback(clickedSubCategory);
});
export const sortSubCategoryNames = (clickedSubCategory) => __awaiter(void 0, void 0, void 0, function* () {
    sortSubCategoryName(clickedSubCategory);
});
export const subCategoryCallback = (clickedSubCategory) => __awaiter(void 0, void 0, void 0, function* () {
    supCategoryArray.map((supCategory) => {
        supCategory.subCategories.subCategoriesList.map((subCategory) => {
            if (subCategory.subCategoryName === clickedSubCategory) {
                buildCategoryProducts(subCategory.subCategoryProducts);
            }
        });
    });
});
export const navigateToLanding = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Going Home!");
    buildFeaturedProducts(randomlySelectedProducts);
    sortProducts(allProductsArray);
});
