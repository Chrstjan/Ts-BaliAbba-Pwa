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

    subCategories.subCategoriesList.map((SubCategory) => {
      console.log(SubCategory);
      let subCategoryCards = `<h2>${SubCategory.subCategoryName}</h2><img src="${SubCategory.thumbnail}" />`;
      subCategoriesContainer.innerHTML += subCategoryCards;
    });
    app.appendChild(subCategoriesContainer);
  }
};
