//body
const tagBody = document.querySelector("body");
//header
const tagHeader = document.querySelector("header");
//titre principale h1
let tagH1 = document.createElement("h1");
let h1Txt = document.createTextNode("Full Javascript website");
//Inclusion du titre h1 dans le header
tagHeader.appendChild(tagH1);
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
const namesOfLink = ["Home", "Gallery", "contact"];
//boucle for pour parcourire le tableaux et généré des "li" pour chaque element du tableaux
for (let i = 0; i < namesOfLink.length; i++) {
  let tagLi = document.createElement("li");
  //Inclusion des listes a puces dans l'unorderlist'
  tagUl.appendChild(tagLi);
  //liens navbarre
  let tagLink = document.createElement("a");
  //on lui définie un attribut "href" avec une url qui se base sur l'index
  tagLink.href = `page${i + 1}.html`;

  let linkTxt = document.createTextNode(namesOfLink[i]);
  //Inclusion des liens dans les listes à puces
  tagLi.appendChild(tagLink);
  //Inclusion des textes dans les liens de la  liste a puces
  tagLink.appendChild(linkTxt);
}

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
