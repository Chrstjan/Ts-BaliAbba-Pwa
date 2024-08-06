import { SubCategories, SubCategory } from "../../Utils/interface.js";
import { clearContainer } from "../app.js";
import { navigateToLanding, subCategoryCallback } from "./sortProducts.js";

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
    clearContainer(subCategoriesContainer);

    const backBtn = `<button id="back-btn">&larr;</button>`;
    subCategoriesContainer.innerHTML += backBtn;

    subCategories.subCategoriesList.map((SubCategory: SubCategory) => {
      console.log(SubCategory);
      let subCategoryCards = `
        <figure class="sub-category-card" data-category="${SubCategory.subCategoryName}">
            <header>
                <img src="${SubCategory.thumbnail}" alt="${SubCategory.subCategoryName}" />
                <h3>${SubCategory.subCategoryName}</h3>
            </header>
        </figure>`;
      subCategoriesContainer.innerHTML += subCategoryCards;
    });
    app.appendChild(subCategoriesContainer);

    const backNavigateBtn = document.getElementById("back-btn");
    backNavigateBtn?.addEventListener("click", () => {
      navigateToLanding();
    });

    const subCategoryCard = document.querySelectorAll(".sub-category-card");
    {
      subCategoryCard.forEach((card) => {
        card.addEventListener("click", () => {
          const subCategoryName = card.getAttribute("data-category");
          if (subCategoryName) {
            subCategoryCallback(subCategoryName);
          }
        });
      });
    }
  }
};
