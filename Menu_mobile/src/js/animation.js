const btnMobile = document.querySelector("button");

btnMobile.addEventListener("click", () => {
  const list = document.querySelector("#lista");
  list.classList.toggle("hidden");
});
