const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieSaved", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieSaved")) {
    cookieContainer.classList.add("active");
  }
}, 2000);
