import { Products } from "../../Utils/interface.js";
import { clearContainer } from "../app.js";

const app = document.getElementById("app");
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");

export const buildProductDetails = async (product: Products) => {
  console.log(product);
  if (app) {
    clearContainer(app);

    cardContainer.innerHTML += `<button id="back-btn">&larr;</button>`;

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

    const likeBtn = document.querySelector(".like-btn");
    likeBtn?.addEventListener("click", () => {
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

        const productThumbnail = document.querySelector(
          ".product-thumbnail"
        ) as HTMLImageElement; //Using type assertion to tell ts it's a image element
        if (productThumbnail && clickedBtnSrc) {
          productThumbnail.src = clickedBtnSrc;
        }
      });
    });

    const descriptionBtn = document.querySelector(".description-header");
    descriptionBtn?.addEventListener("click", () => {
      const arrow = document.querySelector(".arrow-icon");
      arrow?.classList.toggle("rotate-arrow");

      const productDescription = document.querySelector(
        ".product-description-container"
      );
      productDescription?.classList.toggle("show-description");
    });

    const specificationsBtn = document.querySelector(".specs-header");
    specificationsBtn?.addEventListener("click", () => {
      const arrow = document.querySelector(".specs-arrow-icon");
      arrow?.classList.toggle("rotate-arrow");

      const productSpecifications = document.querySelector(
        ".specifications-container"
      );
      productSpecifications?.classList.toggle("show-specifications");
    });
  }
};
