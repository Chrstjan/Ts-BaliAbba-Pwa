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
import { buildFeaturedProducts } from "./buildFeaturedProducts.js";
import { beautyProducts, fragrancesProducts, furnitureProducts, groceriesProducts, homeDecorationProducts, kitchenAccessoriesProducts, laptopProducts, mensShirtsProducts, mensShoesProducts, mensWatchesProducts, mobileAccessoriesProducts, motorcycleProducts, skinCareProducts, smartphoneProducts, sportsAccessoriesProducts, sunglassesProducts, tabletsProducts, topsProducts, vehicleProducts, womensBagsProducts, womensDressesProducts, womensJewelleryProducts, womensShoesProducts, womensWatchesProducts, } from "./productCategories.js";
export let allProductsArray = [];
let supCategoryArray = [];
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
//Issue was the missing [] (this caused it to only take 1 data object and not the array of objects)
export const sortProducts = (products) => __awaiter(void 0, void 0, void 0, function* () {
    products.map((product) => {
        let allProductCategories = product.category;
        const sortProductsCallback = (allProducts) => {
            switch (allProducts) {
                case productCategory.beauty:
                    beautyProducts.push(product);
                    break;
                case productCategory.fragrances:
                    fragrancesProducts.push(product);
                    break;
                case productCategory.skinCare:
                    skinCareProducts.push(product);
                    break;
                case productCategory.furniture:
                    furnitureProducts.push(product);
                    break;
                case productCategory.groceries:
                    groceriesProducts.push(product);
                    break;
                case productCategory.homeDecoration:
                    homeDecorationProducts.push(product);
                    break;
                case productCategory.kitchenAccessories:
                    kitchenAccessoriesProducts.push(product);
                    break;
                case productCategory.laptops:
                    laptopProducts.push(product);
                    break;
                case productCategory.smartphones:
                    smartphoneProducts.push(product);
                    break;
                case productCategory.mobileAccessories:
                    mobileAccessoriesProducts.push(product);
                    break;
                case productCategory.tablets:
                    tabletsProducts.push(product);
                    break;
                case productCategory.sunglasses:
                    sunglassesProducts.push(product);
                    break;
                case productCategory.mensShirts:
                    mensShirtsProducts.push(product);
                    break;
                case productCategory.mensShoes:
                    mensShoesProducts.push(product);
                    break;
                case productCategory.mensWatches:
                    mensWatchesProducts.push(product);
                    break;
                case productCategory.tops:
                    topsProducts.push(product);
                    break;
                case productCategory.womensDresses:
                    womensDressesProducts.push(product);
                    break;
                case productCategory.womensShoes:
                    womensShoesProducts.push(product);
                    break;
                case productCategory.womensWatches:
                    womensWatchesProducts.push(product);
                    break;
                case productCategory.womensBags:
                    womensBagsProducts.push(product);
                    break;
                case productCategory.womensJewellery:
                    womensJewelleryProducts.push(product);
                    break;
                case productCategory.motorcycle:
                    motorcycleProducts.push(product);
                    break;
                case productCategory.vehicle:
                    vehicleProducts.push(product);
                    break;
                case productCategory.sportsAccessories:
                    sportsAccessoriesProducts.push(product);
                    break;
                default:
                    console.error(`Product Category Not Found!`);
                    break;
            }
        };
        sortProductsCallback(allProductCategories);
    });
    supCategoryArray = [
        {
            supCategoryName: "Home Decoration",
            subCategories: {
                homeDecorationProducts,
                furnitureProducts,
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
        },
        {
            supCategoryName: "Skin Products",
            subCategories: {
                beautyProducts,
                fragrancesProducts,
                skinCareProducts,
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/thumbnail.png",
        },
        {
            supCategoryName: "Kitchen",
            subCategories: {
                kitchenAccessoriesProducts,
                groceriesProducts,
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/thumbnail.png",
        },
    ];
    console.log("Sup Categories");
    console.log(supCategoryArray);
});
