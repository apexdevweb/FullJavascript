//body
const tagBody = document.querySelector("body");
/////////////////////HEADER & NAV/////////////////////////
//header
const tagHeader = document.querySelector("header");
//titre principale h1
let tagH1 = document.createElement("h1");
let h1Txt = document.createTextNode("Full Javascript website");
//Inclusion du titre h1 dans le header
tagHeader.appendChild(tagH1);
//création d'une balise vidéo qui sera utilisé pour le font du h1
let vidBg = document.createElement("video");
vidBg.src = "image/vidTwo.mp4";
vidBg.controls = false;
vidBg.autoplay = true;
vidBg.loop = true;
vidBg.muted = true;
vidBg.setAttribute("class", "headerVid");
tagHeader.appendChild(vidBg);
//Inclusion du text dans le h1
tagH1.appendChild(h1Txt);
//nav barre
let tagNav = document.createElement("nav");
//Inclusion de la navbarre dans le header
tagHeader.appendChild(tagNav);
//unorderlist
let tagUl = document.createElement("ul");
//Inclusion de l'unorderlist' dans la navBarre
tagNav.appendChild(tagUl);
//liste à puce
//tableau avec les noms des liens
const namesOfLink = ["Home", "Gallery", "Contact"];
//boucle for pour parcourire le tableaux et généré des "li" pour chaque element du tableaux
for (let i = 0; i < namesOfLink.length; i++) {
  let tagLi = document.createElement("li");
  //Inclusion des listes a puces dans l'unorderlist'
  tagUl.appendChild(tagLi);
  //liens navbarre
  let tagLink = document.createElement("a");
  //on lui définie un attribut "href" avec une url qui se base sur l'index
  tagLink.href = `#page${i + 1}`;

  let linkTxt = document.createTextNode(namesOfLink[i]);
  //Inclusion des liens dans les listes à puces
  tagLi.appendChild(tagLink);
  //Inclusion des textes dans les liens de la  liste a puces
  tagLink.appendChild(linkTxt);
}
/////////////////////HEADER & NAV FIN/////////////////////////
/////////////////////MAIN/////////////////////////
const main = document.querySelector("main");
let sectionPimary = document.createElement("section");
sectionPimary.setAttribute("class", "mainContainer");
main.appendChild(sectionPimary);
const h2Article = ["Miami", "Thaïlande", "Cuba", "Hawaï"];
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
  let btnView = document.createElement("button");
  btnView.setAttribute("class", "btnV");
  let btnViewTxt = document.createTextNode("View");
  btnView.appendChild(btnViewTxt);
  ctnrA.appendChild(btnView);
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
