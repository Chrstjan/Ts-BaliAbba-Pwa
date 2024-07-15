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
import { beautyProducts, fragrancesProducts, furnitureProducts, groceriesProducts, homeDecorationProducts, kitchenAccessoriesProducts, laptopProducts, mensShirtsProducts, mensShoesProducts, mensWatchesProducts, mobileAccessoriesProducts, motorcycleProducts, skinCareProducts, smartphoneProducts, sportsAccessoriesProducts, sunglassesProducts, tabletsProducts, topsProducts, vehicleProducts, womensBagsProducts, womensDressesProducts, womensJewelleryProducts, womensShoesProducts, womensWatchesProducts, } from "./productCategories.js";
export const sortProductSubCategories = (products) => __awaiter(void 0, void 0, void 0, function* () {
    products.map((product) => {
        let allProductCategories = product.category;
        const sortProductsCallback = (allProducts) => __awaiter(void 0, void 0, void 0, function* () {
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
        });
        sortProductsCallback(allProductCategories);
    });
});
