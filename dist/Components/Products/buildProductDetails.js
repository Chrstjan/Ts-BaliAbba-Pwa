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
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
export const buildProductDetails = (product) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(product);
    if (app) {
        clearContainer(app);
        const productCard = `
      <figure class="product-detail-card">
        <header class="product-header">
          <img src="${product.thumbnail}" alt="${product.title}" />
          <button class="like-btn">&hearts;</button>
        </header>
        <figcaption class="product-details">
          <header class="producer-info">
            <p>${product.brand}</p>
            <h3>${product.title}</h3>
            <p>${product.category}</p>
          </header>
          <div class="product-info">
            <span class="rating-info">
              <p>Ratings: ${product.rating} &#9733;</p>
            </span>
            <header class="stock-header">
              <p>Stock: ${product.availabilityStatus}</p>
              <p>Amount: ${product.stock}</p>
            </header>
          </div>
          <span class="product-description">
            <header class="description-header">
              <button class="description-btn">Description</button>
            </header>
            <article>
              <p>${product.description}</p>
            </article>
          </span>
          <span class="product-specs">
            <header class="specs-header">
              <button class="specs-bnt">Specs</button>
            </header>
            <article>
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
              <span class="specs-bar">
                <h5>Dimensions</h5>
                <ul class="dimensions-list">
                  <li>
                    <h6>Depth</h6>
                    <p>${product.dimensions.depth}</p>
                  </li>
                  <li>
                    <h6>Height</h6>
                    <p>${product.dimensions.height}</p>
                  </li>
                  <li>
                    <h6>Width</h6>
                    <p>${product.dimensions.width}</p>
                  </li>
                </ul>
              </span>
              <span class="specs-bar">
                <h5>Meta</h5>
                <ul class="meta-list">
                  <li>
                    <h6>Barcode</h6>
                    <p>${product.meta.barcode}</p>
                  </li>
                  <li>
                    <h6>QR Code</h6>
                    <p>${product.meta.qrCode}</p>
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
        cardContainer.innerHTML = productCard;
        app.appendChild(cardContainer);
        const btnsContainer = document.createElement("span");
        btnsContainer.classList.add("btns-container");
        product.images.map((image) => {
            let imageDots = `<button class="image-btn" data-image="${image}">.</button>`;
            const header = document.querySelector(".product-header");
            if (header) {
                btnsContainer.innerHTML += imageDots;
                header.appendChild(btnsContainer);
            }
        });
    }
});
