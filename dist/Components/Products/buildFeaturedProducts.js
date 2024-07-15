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
const app = document.getElementById("app");
export const buildFeaturedProducts = (products) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(products);
    if (app) {
        clearContainer(app);
    }
    const featuredContainer = document.createElement("div");
    featuredContainer.classList.add("products-container");
    const featuredHeader = `
        <header class="featured-header">
            <h3>Featured Products</h3>
            <h4>Check out some of our featured products</h4>
        </header>`;
    featuredContainer.innerHTML += featuredHeader;
    const cardsContainer = document.createElement("span");
    cardsContainer.classList.add("featured-product-cards");
    products.map((product) => {
        console.log(product);
        let featuredProducts = `
            <figure class="featured-product">
                <header class="figure-header">
                    <img src="${product.thumbnail}" alt="${product.title}" />
                    <h3>${product.title}</h3>
                </header>
            </figure>`;
        cardsContainer.innerHTML += featuredProducts;
    });
    featuredContainer.appendChild(cardsContainer);
    app === null || app === void 0 ? void 0 : app.appendChild(featuredContainer);
});
