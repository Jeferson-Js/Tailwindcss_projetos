function menu(e) {
  const list = document.querySelector("#list");
  list.classList.toggle("hidden");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[60px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[60px]"),
      list.classList.remove("opacity-100"));
}



