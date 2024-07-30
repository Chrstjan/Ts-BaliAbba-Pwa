import { SubCategories } from "../../Utils/interface.js";
import { clearContainer } from "../app.js";

const app = document.getElementById("app");
const subCategoriesContainer = document.createElement("div");
subCategoriesContainer.classList.add("sub-category-container");

export const buildSubCategories = async (
  supCategoryName: string,
  subCategories: SubCategories
) => {
  console.log(supCategoryName);
  console.log(subCategories);
  if (app) {
    clearContainer(app);

    subCategories.subCategoriesLists.map((subCategory) => {
      console.log(subCategory);
    });
  }
};
