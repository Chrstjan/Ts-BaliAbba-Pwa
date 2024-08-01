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
import { sortCategoryName } from "./sortProducts.js";
const app = document.getElementById("app");
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
export const buildProductDetails = (product) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(product);
    if (app) {
        clearContainer(app);
        clearContainer(cardContainer);
        cardContainer.innerHTML += `<button id="back-btn" data-category="${product.category}">&larr;</button>`;
        const productCard = `
      <figure class="product-detail-card">
        <header class="product-header">
          <img class="product-thumbnail" src="${product.thumbnail}" alt="${product.title}" />
          <button class="like-btn">&hearts;</button>
        </header>
        <figcaption class="product-details">
          <header class="producer-info">
            <p class="product-brand">${product.brand}</p>
            <h3>${product.title}</h3>
            <p class="product-category">${product.category}</p>
          </header>
          <div class="product-user-info">
            <span class="rating-info">
              <p>Ratings: ${product.rating} &#9733;</p>
            </span>
            <header class="stock-header">
              <p>Stock: ${product.availabilityStatus}</p>
              <p>Amount: ${product.stock}</p>
            </header>
          </div>
          <div class="product-price">
            <span class="buy-container">
              <span class="amount-container">
              <h5>Amount:</h5>
              <select class="product-amount">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="10+">10+</option>
              </select>
            </span>
            <span class="price-container">
              <p>${product.discountPercentage}%</p>
              <h3>${product.price},-</h3>
            </span>
            </span>
            <span class="purchase-container">
              <button id="buy-btn">Add to cart</button>
              <span class="warinty-container">
                <h5>Shipping: ${product.shippingInformation}</h5>
                <p>${product.warrantyInformation}</p>
                <p>${product.returnPolicy}</p>
              </span>
            </span>
          </span>
          <span class="product-description">
            <header class="description-header">
              <h4 class="description-text">Description</h4>
              <img class="arrow-icon" src="./assets/img/svg/Arrow Icon.svg" alt="Arrow Icon" />
            </header>
            <article class="product-description-container">
              <p>${product.description}</p>
            </article>
          </span>
          <span class="product-specifications">
            <header class="specs-header">
              <h4 class="specs-text">Specifications</h4>
              <img class="specs-arrow-icon" src="./assets/img/svg/Arrow Icon.svg" alt="Arrow Icon" />
            </header>
            <article class="specifications-container">
              <span class="specs-bar">
                <h5>ID</h5>
                <p>${product.id}</p>
              </span>
              <span class="specs-bar">
                <h5>sku</h5>
                <p>${product.sku}</p>
              </span>
              <span class="specs-bar">
                <h5>Weight</h5>
                <p>${product.weight}</p>
              </span>
              <span class="specs-extra-bar">
                <h5>Dimensions</h5>
                <ul class="specs-list">
                  <li>
                    <h5>Depth:</h5>
                    <p>${product.dimensions.depth}</p>
                  </li>
                  <li>
                    <h5>Height:</h5>
                    <p>${product.dimensions.height}</p>
                  </li>
                  <li>
                    <h5>Width:</h5>
                    <p>${product.dimensions.width}</p>
                  </li>
                </ul>
              </span>
              <span class="specs-extra-bar">
                <h5>Meta</h5>
                <ul class="specs-list">
                  <li>
                    <h5>Barcode:</h5>
                    <p>${product.meta.barcode}</p>
                  </li>
                </ul>
              </span>
              <span class="specs-bar">
                <h5>Tags</h5>
                <p>${product.tags}</p>
              </span>
            </article>
          </span>
        </figcaption>
      </figure>`;
        cardContainer.innerHTML += productCard;
        app.appendChild(cardContainer);
        const backBtn = document.getElementById("back-btn");
        backBtn === null || backBtn === void 0 ? void 0 : backBtn.addEventListener("click", () => {
            const productCategory = backBtn.getAttribute("data-category");
            console.log(productCategory);
            if (productCategory) {
                sortCategoryName(productCategory);
            }
        });
        const likeBtn = document.querySelector(".like-btn");
        likeBtn === null || likeBtn === void 0 ? void 0 : likeBtn.addEventListener("click", () => {
            likeBtn.classList.toggle("liked-product");
        });
        const btnsContainer = document.createElement("span");
        btnsContainer.classList.add("btns-container");
        product.images.map((image) => {
            let imageDots = `<button class="image-btn" data-image="${image}"></button>`;
            const header = document.querySelector(".product-header");
            if (header) {
                btnsContainer.innerHTML += imageDots;
                header.appendChild(btnsContainer);
            }
        });
        const imageBtns = document.querySelectorAll(".image-btn");
        imageBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const clickedBtn = btn;
                const clickedBtnSrc = btn.getAttribute("data-image");
                imageBtns.forEach((btn) => btn.classList.remove("active-image"));
                clickedBtn.classList.add("active-image");
                const productThumbnail = document.querySelector(".product-thumbnail"); //Using type assertion to tell ts it's a image element
                if (productThumbnail && clickedBtnSrc) {
                    productThumbnail.src = clickedBtnSrc;
                }
            });
        });
        const descriptionBtn = document.querySelector(".description-header");
        descriptionBtn === null || descriptionBtn === void 0 ? void 0 : descriptionBtn.addEventListener("click", () => {
            const arrow = document.querySelector(".arrow-icon");
            arrow === null || arrow === void 0 ? void 0 : arrow.classList.toggle("rotate-arrow");
            const productDescription = document.querySelector(".product-description-container");
            productDescription === null || productDescription === void 0 ? void 0 : productDescription.classList.toggle("show-description");
        });
        const specificationsBtn = document.querySelector(".specs-header");
        specificationsBtn === null || specificationsBtn === void 0 ? void 0 : specificationsBtn.addEventListener("click", () => {
            const arrow = document.querySelector(".specs-arrow-icon");
            arrow === null || arrow === void 0 ? void 0 : arrow.classList.toggle("rotate-arrow");
            const productSpecifications = document.querySelector(".specifications-container");
            productSpecifications === null || productSpecifications === void 0 ? void 0 : productSpecifications.classList.toggle("show-specifications");
        });
    }
});
