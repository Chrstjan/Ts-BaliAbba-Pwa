var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { productCategory } from "../../Utils/enums.js";
import { buildCategoryProducts } from "./buildCategoryProducts.js";
import { buildProductDetails } from "./buildProductDetails.js";
import { buildSubCategories } from "./buildSubCategories.js";
import { allProductsArray } from "./receivedProducts.js";
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
        if (supCategory.supCategoryName === clickedCategory) {
            buildSubCategories(supCategory.supCategoryName, supCategory.subCategories);
        }
        else {
        }
    });
});
export const sortCategoryName = (clickedSubCategory) => __awaiter(void 0, void 0, void 0, function* () {
    const sortCategoryCallback = (subCategory) => __awaiter(void 0, void 0, void 0, function* () {
        //Category is hardcoded right now (might fix later)
        let productSubCategory;
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
    });
    sortCategoryCallback(clickedSubCategory);
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
