import { beautyProducts, fragrancesProducts, furnitureProducts, groceriesProducts, homeDecorationProducts, kitchenAccessoriesProducts, laptopProducts, mensShirtsProducts, mensShoesProducts, mensWatchesProducts, mobileAccessoriesProducts, motorcycleProducts, skinCareProducts, smartphoneProducts, sportsAccessoriesProducts, sunglassesProducts, tabletsProducts, topsProducts, vehicleProducts, womensBagsProducts, womensDressesProducts, womensJewelleryProducts, womensShoesProducts, womensWatchesProducts, } from "./productCategories.js";
let supCategoryArray = [];
let mensClothes = [];
let womensClothes = [];
export const sortProductSupCategories = () => {
    mensClothes = [
        {
            supCategoryName: "Mens Clothes",
            subCategories: {
                mensShirtsProducts,
                mensShoesProducts,
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/thumbnail.png",
        },
    ];
    womensClothes = [
        {
            supCategoryName: "Womens Clothes",
            subCategories: {
                topsProducts,
                womensDressesProducts,
                womensShoesProducts,
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/thumbnail.png",
        },
    ];
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
        {
            supCategoryName: "Eletronics",
            subCategories: {
                laptopProducts,
                smartphoneProducts,
                mobileAccessoriesProducts,
                tabletsProducts,
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/thumbnail.png",
        },
        {
            supCategoryName: "Clothes",
            subCategories: {
                mensClothes,
                womensClothes,
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/thumbnail.png",
        },
        {
            supCategoryName: "Accessories",
            subCategories: {
                sunglassesProducts,
                mensWatchesProducts,
                womensWatchesProducts,
                womensBagsProducts,
                womensJewelleryProducts,
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/thumbnail.png",
        },
        {
            supCategoryName: "Sports Accessories",
            subCategories: {
                sportsAccessoriesProducts,
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball/thumbnail.png",
        },
        {
            supCategoryName: "Vehicles",
            subCategories: {
                vehicleProducts,
                motorcycleProducts,
            },
            thumbnail: "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/thumbnail.png",
        },
    ];
    console.log("Sup Categories");
    console.log(supCategoryArray);
};
