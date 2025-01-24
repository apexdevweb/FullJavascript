const tagHeader = document.querySelector("header");
let tagH1 = document.createElement("h1");
let h1Txt = document.createTextNode("Full Javascript website");
tagHeader.appendChild(tagH1);
let vidBg = document.createElement("video");
vidBg.src = "assets/image/vidTwo.mp4";
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
const namesOfLink = ["Home", "Hostel", "Contact"];

for (let i = 0; i < namesOfLink.length; i++) {
  let tagLi = document.createElement("li");

  tagUl.appendChild(tagLi);
  let tagLink = document.createElement("a");
  if (i === 0) {
    tagLink.href = "index.html"; // Lien vers la page d'accueil
  } else if (i === 1) {
    tagLink.href = "hotel.html"; // Lien vers la page hotel
  } else if (i === 2) {
    tagLink.href = "contact.html"; // Lien vers la page contact
  }

  let linkTxt = document.createTextNode(namesOfLink[i]);
  tagLi.appendChild(tagLink);
  tagLink.appendChild(linkTxt);
}
