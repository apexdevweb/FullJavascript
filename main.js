//body
const tagBody = document.querySelector("body");
/////////////////////HEADER & NAV/////////////////////////
const tagHeader = document.querySelector("header");
let tagH1 = document.createElement("h1");
let h1Txt = document.createTextNode("Full Javascript website");
tagHeader.appendChild(tagH1);
let vidBg = document.createElement("video");
vidBg.src = "image/vidTwo.mp4";
vidBg.controls = false;
vidBg.autoplay = true;
vidBg.loop = true;
vidBg.muted = true;
vidBg.setAttribute("class", "headerVid");
tagHeader.appendChild(vidBg);
tagH1.appendChild(h1Txt);
let tagNav = document.createElement("nav");
tagHeader.appendChild(tagNav);
let tagUl = document.createElement("ul");
tagNav.appendChild(tagUl);
const namesOfLink = ["Home", "Gallery", "Contact"];
for (let i = 0; i < namesOfLink.length; i++) {
  let tagLi = document.createElement("li");

  tagUl.appendChild(tagLi);
  let tagLink = document.createElement("a");
  tagLink.href = `#page${i + 1}`;

  let linkTxt = document.createTextNode(namesOfLink[i]);
  tagLi.appendChild(tagLink);
  tagLink.appendChild(linkTxt);
}
/////////////////////HEADER & NAV FIN/////////////////////////
/////////////////////MAIN/////////////////////////
const main = document.querySelector("main");
///////INFO PANNEL /////////
let btnInfoPannel = document.createElement("button");
btnInfoPannel.textContent = "View info";
btnInfoPannel.setAttribute("class", "infoUserBtn");
let infoPannel = document.createElement("div");
infoPannel.setAttribute("class", "infoForUser");
main.appendChild(btnInfoPannel);
main.appendChild(infoPannel);
///////INFO PANNEL FIN/////////
let sectionPimary = document.createElement("section");
sectionPimary.setAttribute("class", "mainContainer");
main.appendChild(sectionPimary);
const h2Article = [
  "Californie",
  "Thaïlande",
  "Cuba",
  "Hawaï",
  "Côte-azure",
  "Italie",
  "Espagne",
  "Grèce",
];
for (let i = 0; i < h2Article.length; i++) {
  let articleMain = document.createElement("article");
  articleMain.setAttribute("class", "carte");
  sectionPimary.appendChild(articleMain);
  let ctnrA = document.createElement("div");
  ctnrA.setAttribute("class", "blckA");
  articleMain.appendChild(ctnrA);
  let separ = document.createElement("hr");
  articleMain.appendChild(separ);
  let ctnrB = document.createElement("div");
  ctnrB.setAttribute("class", "blckB");
  articleMain.appendChild(ctnrB);
  let h2Main = document.createElement("h2");
  ctnrA.appendChild(h2Main);
  let h2Txt = document.createTextNode(h2Article[i]);
  h2Main.appendChild(h2Txt);
  let blockQteMain = document.createElement("blockquote");
  blockQteMain.setAttribute("class", "carteblckTxt");
  ctnrA.appendChild(blockQteMain);
  let pgrhfMain = document.createElement("p");
  pgrhfMain.setAttribute("class", "paraTxt");
  blockQteMain.appendChild(pgrhfMain);
  pgrhfMain.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora doloribus ullam deleniti commodisoluta distinctio molestiae iusto atque quod?";
  let dateContainer = document.createElement("div");
  dateContainer.setAttribute("class", "dteContainer");
  ctnrA.appendChild(dateContainer);
  let formDte = document.createElement("form");
  formDte.method = "GET";
  formDte.name = "dteFormValidate";
  //on utilise l'index du tableaux pour nomé l'id de chaque formulaire
  formDte.id = h2Article[i];
  formDte.setAttribute("class", "registerForm");
  dateContainer.appendChild(formDte);
  let dateStart = document.createElement("input");
  dateStart.type = "date";
  dateStart.name = "dateDepart";
  dateStart.setAttribute("class", "depart");
  let txtStart = document.createTextNode("Date d'arrivée");
  let txtEnd = document.createTextNode("Date de départ");
  const txtTab = [txtStart, txtEnd];
  formDte.appendChild(txtTab[0]);
  formDte.appendChild(dateStart);
  let dateEnd = document.createElement("input");
  dateEnd.type = "date";
  dateEnd.name = "dateArrive";
  dateEnd.setAttribute("class", "arrive");
  formDte.appendChild(txtTab[1]);
  formDte.appendChild(dateEnd);
  let registerBtn = document.createElement("input");
  registerBtn.type = "submit";
  registerBtn.value = "Register";
  formDte.appendChild(registerBtn);
  function dteRegister(event) {
    event.preventDefault();

    // Sélectionner l'élément contenant les informations
    const infoPannel = document.querySelector(".infoForUser");
    if (!infoPannel) {
      console.error("L'élément infoForUser est introuvable !");
      return;
    }

    let afficheDate = [];
    const allforms = document.querySelectorAll(
      "#Californie, #Thaïlande, #Cuba, #Hawaï, #Côte-azure, #Italie, #Espagne, #Grèce"
    );

    allforms.forEach((form) => {
      let dteStrt = form.querySelector("[name='dateDepart']").value.trim();
      let dteEnd = form.querySelector("[name='dateArrive']").value.trim();
      console.log(dteStrt, dteEnd);

      if (dteStrt === "" || dteEnd === "") {
        // alert("Veuillez remplir les deux dates !");
        return;
      }

      if (isNaN(Date.parse(dteStrt)) || isNaN(Date.parse(dteEnd))) {
        alert("Veuillez entrer des dates valides !");
        return;
      }

      let infoDateTxt = `Du ${dteStrt} jusqu'au ${dteEnd} pour ${form.id}`;
      if (!afficheDate.includes(infoDateTxt)) {
        let infoDate = document.createElement("p");
        infoDate.setAttribute("class", "info");
        infoDate.textContent = infoDateTxt;

        let attendanceLvlCtnr = document.createElement("span");
        attendanceLvlCtnr.setAttribute("class", "levelContainer");

        attendanceLvlCtnr.textContent = "Niveau de fréquentation";
        let attendanceMeter = document.createElement("i");
        attendanceMeter.setAttribute("class", "fa-solid fa-chart-simple");
        if (dteStrt >= "2025-01-01" && dteEnd <= "2025-04-30") {
          attendanceMeter.classList.add("greenStat");
          attendanceLvlCtnr.textContent = "peu fréquenter";
        } else if (dteStrt >= "2025-05-01" && dteEnd <= "2025-08-31") {
          attendanceLvlCtnr.textContent = "très fréquenter";
          attendanceMeter.classList.add("redStat");
        } else if (dteStrt >= "2025-09-01" && dteEnd <= "2025-12-31") {
          attendanceLvlCtnr.textContent = "moyenement fréquenter";
          attendanceMeter.classList.add("orangeStat");
        }
        attendanceLvlCtnr.appendChild(attendanceMeter);

        infoDate.appendChild(attendanceLvlCtnr);
        afficheDate.push(infoDateTxt);
        infoPannel.appendChild(infoDate);
      }

      form.querySelector("[name='dateDepart']").value = "";
      form.querySelector("[name='dateArrive']").value = "";
    });
  }

  formDte.addEventListener("submit", dteRegister);
  let btnView = document.createElement("button");
  btnView.setAttribute("class", "btnV");
  let btnViewTxt = document.createTextNode("View");
  ctnrA.appendChild(btnView);
  btnView.appendChild(btnViewTxt);
  let figureMain = document.createElement("figure");
  ctnrB.appendChild(figureMain);
  const imgTab = [
    "image/papper1.jpg",
    "image/papper2.jpg",
    "image/papper3.jpg",
    "image/papper4.jpg",
    "image/saint-maximeA.webp",
    "image/italie.jpg",
    "image/espagne.jpg",
    "image/grèce.jpg",
  ];
  let imgFig = document.createElement("img");
  imgFig.src = imgTab[i];
  imgFig.alt = "myImg";
  figureMain.appendChild(imgFig);
  let captionFig = document.createElement("figcaption");
  let captionTxt = document.createTextNode("Lorem ipsum dolor sit amet.");
  captionFig.appendChild(captionTxt);
  figureMain.appendChild(captionFig);
}
/////////////////////MAIN FIN/////////////////////////
///FOOTER////
const tagFoot = document.querySelector("footer");
let vidBgFoot = document.createElement("video");
vidBgFoot.src = "image/vidOne.mp4";
vidBgFoot.controls = false;
vidBgFoot.autoplay = true;
vidBgFoot.loop = true;
vidBgFoot.muted = true;
vidBgFoot.setAttribute("class", "footVid");
tagFoot.appendChild(vidBgFoot);
let signature = document.createElement("h4");
let signTxt = document.createTextNode("©Script'enjoyer 2025");
signature.appendChild(signTxt);
tagFoot.appendChild(signature);
let today = new Date();
let smalldate = document.createElement("small");
let dateInfo = document.createTextNode(today);
smalldate.appendChild(dateInfo);
tagFoot.appendChild(smalldate);
///FOOTER FIN////
