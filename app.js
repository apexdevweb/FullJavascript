document.addEventListener("DOMContentLoaded", () => {
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
  //bouton open/close
  const opncls = document.querySelector(".infoUserBtn");
  const infoctnr = document.querySelector(".infoForUser");
  opncls.addEventListener("click", () => {
    if (infoctnr.classList.contains("expensionInfo")) {
      opncls.textContent = "View info";
    } else {
      opncls.textContent = "Close";
    }
    infoctnr.classList.toggle("expensionInfo");
  });

  //bouttons article
  const btnviewer = document.querySelectorAll(".btnV");
  const artclStyleParams = document.querySelectorAll(".carte");
  const imgStyleParams = document.querySelectorAll("img");
  const blckAStyleParams = document.querySelectorAll(".blckA");
  const dteCtnrParams = document.querySelectorAll(".dteContainer");
  const dteInfoParams = document.querySelectorAll(".info");
  btnviewer.forEach((buttonView, index) => {
    const imgModif = imgStyleParams[index];
    // Associe chaque bouton à sa carte correspondante
    const paramsArtcl = artclStyleParams[index];
    const paramsBlck = blckAStyleParams[index];
    const dateContainer = dteCtnrParams[index];
    const dateInfoContainer = dteInfoParams[index];
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
          dateContainer.classList.remove("apparition");
          dateInfoContainer.classList.remove("info");
        } else {
          paramsArtcl.classList.add("expensionModal");
          imgModif.classList.add("expensionImg");
          paramsBlck.classList.add("expensionTxt");
          dateContainer.classList.add("apparition");
          dateInfoContainer.classList.add("info");
        }
      });

      buttonView.addEventListener("mouseout", () => {
        paramsArtcl.classList.remove("modifArtcl");
        imgModif.classList.remove("modifImg");
      });
    }
  });
});
//mécanique bouttons pour l'expension
