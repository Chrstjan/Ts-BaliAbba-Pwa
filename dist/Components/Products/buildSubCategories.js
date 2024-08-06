var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { clearContainer } from "../app.js";
import { navigateToLanding, subCategoryCallback } from "./sortProducts.js";
const app = document.getElementById("app");
const subCategoriesContainer = document.createElement("div");
subCategoriesContainer.classList.add("sub-category-container");
export const buildSubCategories = (supCategoryName, subCategories) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(supCategoryName);
    console.log(subCategories);
    if (app) {
        clearContainer(app);
        clearContainer(subCategoriesContainer);
        const backBtn = `<button id="back-btn">&larr;</button>`;
        subCategoriesContainer.innerHTML += backBtn;
        subCategories.subCategoriesList.map((SubCategory) => {
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
        backNavigateBtn === null || backNavigateBtn === void 0 ? void 0 : backNavigateBtn.addEventListener("click", () => {
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
});
