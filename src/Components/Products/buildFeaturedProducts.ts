import { products } from "../../Utils/interface.js";
import { clearContainer } from "../app.js";

const app = document.getElementById("app");

export const buildFeaturedProducts = async (products: products) => {
    console.log(products);
    if (app) {
        clearContainer(app);
    }

    const featuredContainer = document.createElement("div");
    featuredContainer.classList.add("products-container")
    const featuredHeader = `
        <header class="featured-header">
            <h3>Featured Products</h3>
            <h4>Check out some of our featured products</h4>
        </header>`;
    featuredContainer.innerHTML += featuredHeader;

    const cardsContainer = document.createElement("span");
    cardsContainer.classList.add("featured-product-cards");

    products.map((product: products) => {
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
    app?.appendChild(featuredContainer);
}