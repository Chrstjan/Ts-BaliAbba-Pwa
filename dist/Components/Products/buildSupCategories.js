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
import { productCategoryCallback } from "./sortProducts.js";
const app = document.getElementById("app");
const supCategoryContainer = document.createElement("div");
supCategoryContainer.classList.add("supcategory-container");
const cardsContainer = document.createElement("span");
cardsContainer.classList.add("cards-container");
export const buildSupCategories = (supCategories) => __awaiter(void 0, void 0, void 0, function* () {
    clearContainer(supCategoryContainer);
    const categoriesHeader = `<header><h2>Check out our product categories</h2></header>`;
    supCategoryContainer.innerHTML += categoriesHeader;
    supCategories.map((supCategory) => {
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
    app === null || app === void 0 ? void 0 : app.appendChild(supCategoryContainer);
    const supCategoryCard = document.querySelectorAll(".sup-category");
    supCategoryCard.forEach((supCategory) => {
        supCategory.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
            if (supCategory) {
                const supCategoryName = supCategory.textContent.trim();
                productCategoryCallback(supCategoryName);
            }
        }));
    });
});
