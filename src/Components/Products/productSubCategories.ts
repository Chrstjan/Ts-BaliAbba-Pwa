import { productCategory } from "../../Utils/enums.js";
import { productCategoryCallback, subCategoryCallback } from "./sortProducts.js";

export const sortCategoryCallback = async (subCategory: string) => {
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

      case productCategory.sunglasses:
        productSubCategory = "Sunglasses";
        subCategoryCallback(productSubCategory);
        break;

      case productCategory.mensWatches:
        productSubCategory = "Mens Watches";
        subCategoryCallback(productSubCategory);
        break;

      case productCategory.womensWatches:
        productSubCategory = "Womens Watches";
        subCategoryCallback(productSubCategory);
        break;

      case productCategory.womensBags:
        productSubCategory = "Womens Bags";
        subCategoryCallback(productSubCategory);
        break;

      case productCategory.womensJewellery:
        productSubCategory = "Womens Jewellery";
        subCategoryCallback(productSubCategory);
        break;

      case productCategory.sportsAccessories:
        productSubCategory = "Sports Accessories";
        subCategoryCallback(productSubCategory);
        break;

      case productCategory.vehicle:
        productSubCategory = "Vehicles";
        subCategoryCallback(productSubCategory);
        break;

      case productCategory.motorcycle:
        productSubCategory = "Motorcycle";
        subCategoryCallback(productSubCategory);
        break;
      
      default:
        console.error("Match not found!");
        break;
    }
  };

  export const sortSubCategoryName = (subProductCategory: string) => {
    console.log(productCategory);
    let supCategoryString: string;

    switch (subProductCategory) {

      case productCategory.homeDecoration:
      case productCategory.furniture:
        supCategoryString = "Home Decoration";
        productCategoryCallback(supCategoryString);
        break;

      case productCategory.beauty:
      case productCategory.fragrances:
      case productCategory.skinCare:
        supCategoryString = "Skin Products";
        productCategoryCallback(supCategoryString);
        break;
      
      case productCategory.kitchenAccessories:
      case productCategory.groceries:
        supCategoryString = "Kitchen";
        productCategoryCallback(supCategoryString);
        break;

      case productCategory.laptops:
      case productCategory.smartphones:
      case productCategory.mobileAccessories:
      case productCategory.tablets:
        supCategoryString = "Eletronics";
        productCategoryCallback(supCategoryString);
        break;

      case productCategory.sunglasses:
      case productCategory.mensWatches:
      case productCategory.womensWatches:
      case productCategory.womensBags:
      case productCategory.womensJewellery:
        supCategoryString = "Accessories";
        productCategoryCallback(supCategoryString);
        break;

      case productCategory.sportsAccessories:
        supCategoryString = "Sports Accessories";
        productCategoryCallback(supCategoryString);
        break;

      case productCategory.vehicle:
      case productCategory.motorcycle:
        supCategoryString = "Vehicles";
        productCategoryCallback(supCategoryString);
        break;
      
      default:
        console.error(`Sup Category not found`);
        break;
    }
  }