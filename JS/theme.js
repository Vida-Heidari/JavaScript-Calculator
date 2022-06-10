const theme = document.querySelector(".theme-toggler");

theme.addEventListener("click", function () {
  const body = document.body;
  body.classList.toggle("light--mode");
});
