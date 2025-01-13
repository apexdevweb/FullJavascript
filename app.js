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
//bouttons article

const btnviewer = document.querySelectorAll(".btnV");
const artclStyleParams = document.querySelectorAll(".carte");
const imgStyleParams = document.querySelectorAll("img");
const blckAStyleParams = document.querySelectorAll(".blckA");
const dprtStyleParams = document.querySelectorAll(".depart");
const ndStyleParams = document.querySelectorAll(".arrive");
btnviewer.forEach((buttonView, index) => {
  const imgModif = imgStyleParams[index];
  const paramsArtcl = artclStyleParams[index]; // Associe chaque bouton à sa carte correspondante
  const paramsBlck = blckAStyleParams[index];
  const departparams = dprtStyleParams[index];
  const arriveParams = ndStyleParams[index];
  if ((paramsArtcl, imgModif)) {
    buttonView.addEventListener("mouseover", () => {
      paramsArtcl.classList.add("modifArtcl");
      imgModif.classList.add("modifImg");
    });
    buttonView.addEventListener("click", () => {
      if (paramsArtcl.classList.contains("expensionModal")) {
        paramsArtcl.classList.remove("expensionModal");
        imgModif.classList.remove("expensionImg");
        paramsBlck.classList.remove("expensionTxt");
        departparams.classList.remove("apparition");
        arriveParams.classList.remove("apparition");
      } else {
        paramsArtcl.classList.add("expensionModal");
        imgModif.classList.add("expensionImg");
        paramsBlck.classList.add("expensionTxt");
        departparams.classList.add("apparition");
        arriveParams.classList.add("apparition");
      }
    });
    buttonView.addEventListener("mouseout", () => {
      paramsArtcl.classList.remove("modifArtcl");
      imgModif.classList.remove("modifImg");
    });
  }
});

//mécanique bouttons pour l'expension
