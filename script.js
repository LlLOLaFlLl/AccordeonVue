const items = document.querySelectorAll(".accordion__item");

items.forEach(item => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active"); // закрываем секцию
    } else {
      items.forEach(i => i.classList.remove("active")); // закрываем все неактивные секции
      item.classList.add("active"); // открываем текущую секцию
    }
  });
});
