setTimeout(() => {
  document.getElementById("cookie-popup").style.display = "block";
}, 5000);

document.getElementById("accept-cookies").addEventListener("click", () => {
  document.getElementById("cookie-popup").style.display = "none";
});
