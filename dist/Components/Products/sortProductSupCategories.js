var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { buildSupCategories } from "./buildSupCategories.js";
import { beautyProducts, fragrancesProducts, furnitureProducts, groceriesProducts, homeDecorationProducts, kitchenAccessoriesProducts, laptopProducts, mensShirtsProducts, mensShoesProducts, mensWatchesProducts, mobileAccessoriesProducts, motorcycleProducts, skinCareProducts, smartphoneProducts, sportsAccessoriesProducts, sunglassesProducts, tabletsProducts, topsProducts, vehicleProducts, womensBagsProducts, womensDressesProducts, womensJewelleryProducts, womensShoesProducts, womensWatchesProducts, } from "./productCategories.js";
export let supCategoryArray = [];
let mensClothes = [];
let womensClothes = [];
export const sortProductSupCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    mensClothes = [
        {
            supCategoryName: "Mens Clothes",
            subCategories: {
                subCategoriesLists: [mensShirtsProducts, mensShoesProducts],
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/thumbnail.png",
        },
    ];
    womensClothes = [
        {
            supCategoryName: "Womens Clothes",
            subCategories: {
                subCategoriesLists: [
                    topsProducts,
                    womensDressesProducts,
                    womensShoesProducts,
                ],
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/thumbnail.png",
        },
    ];
    supCategoryArray = [
        {
            supCategoryName: "Home Decoration",
            subCategories: {
                subCategoriesLists: [homeDecorationProducts, furnitureProducts],
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
        },
        {
            supCategoryName: "Skin Products",
            subCategories: {
                subCategoriesLists: [
                    beautyProducts,
                    fragrancesProducts,
                    skinCareProducts,
                ],
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/thumbnail.png",
        },
        {
            supCategoryName: "Kitchen",
            subCategories: {
                subCategoriesLists: [kitchenAccessoriesProducts, groceriesProducts],
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/thumbnail.png",
        },
        {
            supCategoryName: "Eletronics",
            subCategories: {
                subCategoriesLists: [
                    laptopProducts,
                    smartphoneProducts,
                    mobileAccessoriesProducts,
                    tabletsProducts,
                ],
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/thumbnail.png",
        },
        {
            supCategoryName: "Clothes",
            subCategories: {
                subCategoriesLists: [mensClothes, womensClothes],
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/thumbnail.png",
        },
        {
            supCategoryName: "Accessories",
            subCategories: {
                subCategoriesLists: [
                    sunglassesProducts,
                    mensWatchesProducts,
                    womensWatchesProducts,
                    womensBagsProducts,
                    womensJewelleryProducts,
                ],
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/thumbnail.png",
        },
        {
            supCategoryName: "Sports Accessories",
            subCategories: {
                subCategoriesLists: [sportsAccessoriesProducts],
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball/thumbnail.png",
        },
        {
            supCategoryName: "Vehicles",
            subCategories: {
                subCategoriesLists: [vehicleProducts, motorcycleProducts],
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/thumbnail.png",
        },
    ];
    buildSupCategories(supCategoryArray);
});
