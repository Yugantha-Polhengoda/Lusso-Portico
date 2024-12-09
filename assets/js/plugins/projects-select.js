/*------------------------------------------
	Projects Selector
	-------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".item");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      items.forEach((item) => {
        if (
          category === "all" ||
          item.getAttribute("data-category") === category
        ) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
});

