import { SupProductCategory } from "../../Utils/interface.js";
import { clearContainer } from "../app.js";
import { productCategoryCallback } from "./sortProducts.js";

const app = document.getElementById("app");
const supCategoryContainer = document.createElement("div");
supCategoryContainer.classList.add("supcategory-container");
const cardsContainer = document.createElement("span");
cardsContainer.classList.add("cards-container");

export const buildSupCategories = async (
  supCategories: SupProductCategory[]
) => {
  clearContainer(supCategoryContainer);
  const categoriesHeader = `<header><h2>Check out our product categories</h2></header>`;
  supCategoryContainer.innerHTML += categoriesHeader;

  supCategories.map((supCategory: SupProductCategory) => {
    console.log(supCategory);
    let supCatCards = `
        <figure class="sup-category">
            <header class="sup-category-header">
                <h3>${supCategory.supCategoryName}</h3>
                <img src="${supCategory.thumbnail}" alt="${supCategory.supCategoryName}" />
            </header>
        </figure>`;
    cardsContainer.innerHTML += supCatCards;
  });
  supCategoryContainer.appendChild(cardsContainer);
  app?.appendChild(supCategoryContainer);

  const supCategoryCard = document.querySelectorAll(".sup-category");
  supCategoryCard.forEach((supCategory) => {
    supCategory.addEventListener("click", async () => {
      if (supCategory) {
        const supCategoryName = supCategory.textContent.trim();
        productCategoryCallback(supCategoryName);
      }
    });
  });
};
