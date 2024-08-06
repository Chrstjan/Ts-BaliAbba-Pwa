import { navigateToLanding } from "../Products/sortProducts.js";

export const pageNavigation = async () => {
  const headerLogo = document.querySelector(".mobile-header-logo");

  headerLogo?.addEventListener("click", async () => {
    console.log("Header Navigation");
    navigateToLanding();
  });
};
