import { SubCategory, SupProductCategory } from "../../Utils/interface.js";
import { buildSupCategories } from "./buildSupCategories.js";

import {
  beautyProducts,
  fragrancesProducts,
  furnitureProducts,
  groceriesProducts,
  homeDecorationProducts,
  kitchenAccessoriesProducts,
  laptopProducts,
  mensShirtsProducts,
  mensShoesProducts,
  mensWatchesProducts,
  mobileAccessoriesProducts,
  motorcycleProducts,
  skinCareProducts,
  smartphoneProducts,
  sportsAccessoriesProducts,
  sunglassesProducts,
  tabletsProducts,
  topsProducts,
  vehicleProducts,
  womensBagsProducts,
  womensDressesProducts,
  womensJewelleryProducts,
  womensShoesProducts,
  womensWatchesProducts,
} from "./productCategories.js";

export let supCategoryArray: SupProductCategory[] = [];
let mensClothes: SubCategory[] = [];
let womensClothes: SubCategory[] = [];

export const sortProductSupCategories = async () => {
  mensClothes = [
    {
      subCategoryProducts: mensShirtsProducts,
      subCategoryName: "Mens Shirts",
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/thumbnail.png",
    },
    {
      subCategoryProducts: mensShoesProducts,
      subCategoryName: "Mens Shoes",
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/thumbnail.png",
    },
  ];

  womensClothes = [
    {
      supCategoryName: "Womens Clothes",
      subCategories: {
        subCategoriesList: [
          {
            subCategoryProducts: topsProducts,
            subCategoryName: "Tops",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/thumbnail.png",
          },
          {
            subCategoryProducts: womensDressesProducts,
            subCategoryName: "Womens Dresses",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/thumbnail.png",
          },
          {
            subCategoryProducts: womensShoesProducts,
            subCategoryName: "Womens Shoes",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/thumbnail.png",
          },
        ],
      },
      thumbnail:
        "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/thumbnail.png",
    },
  ];

  supCategoryArray = [
    {
      supCategoryName: "Home Decoration",
      subCategories: {
        subCategoriesList: [
          {
            subCategoryProducts: homeDecorationProducts,
            subCategoryName: "Home Decorations",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/thumbnail.png",
          },
          {
            subCategoryProducts: furnitureProducts,
            subCategoryName: "Furniture",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png",
          },
        ],
      },
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
    },
    {
      supCategoryName: "Skin Products",
      subCategories: {
        subCategoriesList: [
          {
            subCategoryProducts: beautyProducts,
            subCategoryName: "Beauty Products",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
          },
          {
            subCategoryProducts: fragrancesProducts,
            subCategoryName: "Fragrances",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
          },
          {
            subCategoryProducts: skinCareProducts,
            subCategoryName: "Skin Care",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/skin-care/Olay%20Ultra%20Moisture%20Shea%20Butter%20Body%20Wash/thumbnail.png",
          },
        ],
      },
      thumbnail:
        "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/thumbnail.png",
    },
    {
      supCategoryName: "Kitchen",
      subCategories: {
        subCategoriesList: [
          {
            subCategoryProducts: kitchenAccessoriesProducts,
            subCategoryName: "Kitchen Accessories",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/kitchen-accessories/Red%20Tongs/thumbnail.png",
          },
          {
            subCategoryProducts: groceriesProducts,
            subCategoryName: "Groceries",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png",
          },
        ],
      },
      thumbnail:
        "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/thumbnail.png",
    },
    {
      supCategoryName: "Eletronics",
      subCategories: {
        subCategoriesList: [
          {
            subCategoryProducts: laptopProducts,
            subCategoryName: "Laptops",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/thumbnail.png",
          },
          {
            subCategoryProducts: smartphoneProducts,
            subCategoryName: "Smartphones",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png",
          },
          {
            subCategoryProducts: mobileAccessoriesProducts,
            subCategoryName: "Mobile Accessories",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
          },
          {
            subCategoryProducts: tabletsProducts,
            subCategoryName: "Tablets",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/thumbnail.png",
          },
        ],
      },
      thumbnail:
        "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/thumbnail.png",
    },
    {
      supCategoryName: "Clothes",
      subCategories: {
        subCategoriesList: [
          {
            subCategoryProducts: mensClothes,
            subCategoryName: "Mens Clothes",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/thumbnail.png",
          },
          {
            subCategoryProducts: womensClothes,
            subCategoryName: "Womens Clothes",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/thumbnail.png",
          },
        ],
      },
      thumbnail:
        "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/thumbnail.png",
    },
    {
      supCategoryName: "Accessories",
      subCategories: {
        subCategoriesList: [
          {
            subCategoryProducts: sunglassesProducts,
            subCategoryName: "Sunglasses",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/thumbnail.png",
          },
          {
            subCategoryProducts: mensWatchesProducts,
            subCategoryName: "Mens Watches",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/thumbnail.png",
          },
          {
            subCategoryProducts: womensWatchesProducts,
            subCategoryName: "Womens Watches",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/thumbnail.png",
          },
          {
            subCategoryProducts: womensBagsProducts,
            subCategoryName: "Womens Bags",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/thumbnail.png",
          },
          {
            subCategoryProducts: womensJewelleryProducts,
            subCategoryName: "Womens Jewellery",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/womens-jewellery/Tropical%20Earring/thumbnail.png",
          },
        ],
      },
      thumbnail:
        "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/thumbnail.png",
    },
    {
      supCategoryName: "Sports Accessories",
      subCategories: {
        subCategoriesList: [
          {
            subCategoryProducts: sportsAccessoriesProducts,
            subCategoryName: "Sports Accessories",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball%20Rim/thumbnail.png",
          },
        ],
      },
      thumbnail:
        "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball/thumbnail.png",
    },
    {
      supCategoryName: "Vehicles",
      subCategories: {
        subCategoriesList: [
          {
            subCategoryProducts: vehicleProducts,
            subCategoryName: "Vehicles",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/thumbnail.png",
          },
          {
            subCategoryProducts: motorcycleProducts,
            subCategoryName: "Motorcycle",
            thumbnail:
              "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/thumbnail.png",
          },
        ],
      },
      thumbnail:
        "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/thumbnail.png",
    },
  ];
  buildSupCategories(supCategoryArray);
};
