document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const closeButton = document.getElementById("close-button");
  const navList = document.querySelector("#burger-menu ul");

  menuButton.addEventListener("click", () => {
    navList.classList.add("active");
    menuButton.style.display = "none";
    closeButton.style.display = "inline";
  });

  closeButton.addEventListener("click", () => {
    navList.classList.remove("active");
    closeButton.style.display = "none";
    menuButton.style.display = "inline";
  });
});
