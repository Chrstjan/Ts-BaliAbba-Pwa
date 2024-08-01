import { Products } from "../../Utils/interface.js";
import { clearContainer } from "../app.js";
import { productCallback } from "./sortProducts.js";

const app = document.getElementById("app");
const productsContainer = document.createElement("div");
productsContainer.classList.add("category-products-container");

export const buildCategoryProducts = async (products: Products[]) => {
  if (app) {
    clearContainer(app);
    clearContainer(productsContainer);

    const backBtn = `<button id="back-btn">&larr;</button>`;
    productsContainer.innerHTML += backBtn;

    products.map((product: Products) => {
      console.log(product);
      let productsCards = `
        <figure class="category-product-card" data-product="${product.title}">
            <header class="product-header">
                <img class="product-image" src="${product.thumbnail}" alt="${product.title}" />
                <button class="like-btn">&hearts;</button>
            </header>
            <figcaption>
                <header>
                    <h4>${product.category}</h4>
                </header>
                <h3>${product.title}</h3>
                <footer>
                    <p>${product.brand}</p>
                </footer>
            </figcaption>
        </figure>`;
      productsContainer.innerHTML += productsCards;
    });
    app?.appendChild(productsContainer);

    const likeBtn = document.querySelectorAll(".like-btn");
    likeBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("liked-product");
      });
    });

    const productCard = document.querySelectorAll(".category-product-card");
    productCard.forEach((card) => {
      card.addEventListener("click", () => {
        const productName = card.getAttribute("data-product");
        if (productName) {
          productCallback(productName);
        }
      });
    });
  }
};
