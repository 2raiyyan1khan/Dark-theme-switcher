let switcher = document.getElementById("switcher");

switcher.addEventListener("click", () => {
  if (document.body.dataset.theme === "dark") {
    document.body.dataset.theme = "light";
    switcher.innerHTML = '<i class="far fa-moon"></i>';
  } else {
    document.body.dataset.theme = "dark";
    switcher.innerHTML = '<i class="far fa-sun"></i>';
  }
});
