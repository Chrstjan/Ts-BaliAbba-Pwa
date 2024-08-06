import { Products } from "../../Utils/interface.js";
import { clearContainer } from "../app.js";
import { productCallback } from "./sortProducts.js";

const app = document.getElementById("app");

export const buildFeaturedProducts = async (products: Products[]) => {
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

  products.map((product: Products) => {
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

  const productCards = document.querySelectorAll(".featured-product");
  productCards.forEach((product: Element) => {
    product.addEventListener("click", async () => {
      let productName = product.textContent;
      let trimmedProductName = productName?.trim();
      if (trimmedProductName) {
        productCallback(trimmedProductName);
      }
    });
  });
};
