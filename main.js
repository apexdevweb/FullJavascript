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
  let figureMain = document.createElement("figure");
  ctnrB.appendChild(figureMain);
  const imgTab = [
    "image/papper1.jpg",
    "image/papper2.jpg",
    "image/papper3.jpg",
    "image/papper4.jpg",
  ];
  let imgFig = document.createElement("img");
  for (let i = 0; i < imgTab.length; i++) {
    imgFig.src = imgTab[i];
    imgFig.alt = "myImg";
    figureMain.appendChild(imgFig);
  }
  let today = new Date();
  let captionFig = document.createElement("figcaption");
  let captionTxt = document.createTextNode(today);
  captionFig.appendChild(captionTxt);
  figureMain.appendChild(captionFig);
}
/////////////////////MAIN FIN/////////////////////////

// let link = document.createElement("a");
// link.id = "liens";
// link.href = "index.html";
// let linkTxt = document.createTextNode("Retour à l'index");
// container.appendChild(link).innerHTML = "<br>".repeat(2);
// link.appendChild(linkTxt);
// let linkClone = link.cloneNode(true);
// linkClone.setAttribute("class", "clnLink");
// container.appendChild(linkClone);
// let MyLinks = [link, linkClone];
// MyLinks.forEach((lkns) => {
//   lkns.addEventListener("mouseover", () => {
//     lkns.style.textDecoration = "underline";
//   });
//   lkns.addEventListener("mouseout", () => {
//     lkns.style.textDecoration = "none";
//   });
// });

// let para = document.createElement("p");
// para.setAttribute("class", "myPara");
// container.appendChild(para);
// let paraTxt = document.createTextNode(
//   "à but non-lucratif chargé de promouvoir la compatibilité des technologies du"
// );
// para.appendChild(paraTxt);

// let remplacement = () => {
//   let remplace = document.createTextNode("Remplacer!!! a but lucratif");
//   paraTxt.replaceWith(remplace);
// };

// let btn = document.createElement("button");
// btn.setAttribute("id", "Remplacer");
// btn.textContent = "Remplacer";
// container.appendChild(btn);
// btn.onclick = remplacement();
// console.log(btn);
