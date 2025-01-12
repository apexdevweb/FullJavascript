//liens nav
const linksNav = document.querySelectorAll("li");
linksNav.forEach((liens) => {
  liens.addEventListener("mouseover", () => {
    liens.style.transition = "0.3s ease";
    liens.style.transform = "scale(1.08)";
    liens.style.textDecoration = "underline";
    liens.style.letterSpacing = "2px";
  });
  liens.addEventListener("mouseout", () => {
    liens.style.transform = "scale(1)";
    liens.style.textDecoration = "none";
    liens.style.letterSpacing = "0";
  });
});
