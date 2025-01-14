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
let sectionPimary = document.createElement("section");
sectionPimary.setAttribute("class", "mainContainer");
main.appendChild(sectionPimary);
const h2Article = ["Californie", "Thaïlande", "Cuba", "Hawaï"];
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
  formDte.setAttribute("class", "registerForm");
  dateContainer.appendChild(formDte);
  let dateStart = document.createElement("input");
  dateStart.type = "date";
  dateStart.name = "dateDepart";
  dateStart.setAttribute("class", "depart");
  let txtStart = document.createTextNode("Date de départ");
  let txtEnd = document.createTextNode("Date d'arrivée");
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
  const tabStart = [];
  const tabEnd = [];
  function dteRegister(event) {
    event.preventDefault();
    let dteStrt = document.forms["dteFormValidate"]["dateDepart"].value.trim();
    let dteEnd = document.forms["dteFormValidate"]["dateArrive"].value.trim();
    if (dteStrt !== "" && dteEnd !== "") {
      tabStart.push(dteStrt);
      tabEnd.push(dteEnd);
      console.log("Dates de début :", tabStart);
      console.log("Dates de fin :", tabEnd);
      for (let i = 0; i < tabStart.length && tabEnd.length; i++) {
        let infoDate = document.createElement("p");
        let infoDateTxt = document.createTextNode(
          "Du" + " " + tabStart[i] + " " + "jusq'au" + " " + tabEnd[i]
        );
        infoDate.setAttribute("class", "info");
        ctnrA.appendChild(infoDate);
        infoDate.appendChild(infoDateTxt);
        return;
      }
    } else {
      alert("Veuillez remplir les deux dates !");
    }
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
