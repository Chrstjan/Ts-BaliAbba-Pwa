import { clearContainer } from "../app.js";
const app = document.getElementById("app");
export const buildLoadingAnimation = () => {
    if (app) {
        clearContainer(app);
        const animationElement = `
    <div class="animation-container">
        <span class="animation-box"></span>
        <h2>Loading...</h2>
    </div>`;
        app.innerHTML += animationElement;
    }
};
