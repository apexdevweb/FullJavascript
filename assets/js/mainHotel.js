const mainHotel = document.querySelector("main");
let sectionHotel = document.createElement("section");
sectionHotel.setAttribute("class", "SecHotel");
mainHotel.appendChild(sectionHotel);

let hotelCtnr = document.createElement("div");
hotelCtnr.setAttribute("class", "hotelContainer");
sectionHotel.appendChild(hotelCtnr);
for (let i = 0; i < 3; i++) {
  let hotelSeparator = document.createElement("hr");
  hotelSeparator.setAttribute("class", "htlSepar");
  hotelCtnr.appendChild(hotelSeparator);
}
let labelSlct = document.createElement("label");
labelSlct.for = "selectionHotel";
labelSlct.textContent =
  "Choisir une destination pour voir les hotels disponible";
labelSlct.setAttribute("class", "labelSelect");
hotelCtnr.appendChild(labelSlct);
let htlslct = document.createElement("select");
htlslct.name = "selectionHotel";
htlslct.id = "selectionHotel";
htlslct.setAttribute("class", "htlSelect");
hotelCtnr.appendChild(htlslct);
let destinationOpt = [
  "Californie",
  "Thailande",
  "Cuba",
  "Hawai",
  "Cote-azure",
  "Italie",
  "Espagne",
  "Grece",
];
destinationOpt.forEach((desti) => {
  let slctOpt = document.createElement("option");
  slctOpt.value = desti;
  slctOpt.textContent = desti;
  slctOpt.setAttribute("class", "selectOption");
  htlslct.appendChild(slctOpt);
});
let htlListCtnr = document.createElement("div");
htlListCtnr.setAttribute("class", "htlListe");
hotelCtnr.appendChild(htlListCtnr);
document.addEventListener("DOMContentLoaded", () => {
  if (destinationOpt[0]) {
    for (let i = 0; i < 7; i++) {
      let htlFrames = document.createElement("iframe");
      htlFrames.width = "400";
      htlFrames.height = "300";
      htlFrames.style.border = "2px solid #ccc";
      htlFrames.allow = "fullscreen";
      htlFrames.setAttribute("class", "hotelFrame");
      if (i === 0) {
        // htlFrames.src =
        //   "https://www.tripadvisor.com/Hotel_Review-g32655-d19852062-Reviews-Fairmont_Century_Plaza-Los_Angeles_California.html";
        htlListCtnr.appendChild(htlFrames);
      } else if (i === 1) {
        // htlFrames.src =
        //   "https://www.tripadvisor.com/Hotel_Review-g32655-d23845025-Reviews-Conrad_Los_Angeles-Los_Angeles_California.html";
        htlListCtnr.appendChild(htlFrames);
      } else if (i === 3) {
        // htlFrames.src =
        //   "https://www.tripadvisor.com/Hotel_Review-g32655-d19900021-Reviews-Downtown_LA_Proper_Hotel-Los_Angeles_California.html";
        htlListCtnr.appendChild(htlFrames);
      } else if (i === 4) {
        // htlFrames.src =
        //   "https://www.tripadvisor.com/Hotel_Review-g32655-d76049-Reviews-Four_Seasons_Hotel_Los_Angeles_at_Beverly_Hills-Los_Angeles_California.html";
        htlListCtnr.appendChild(htlFrames);
      } else if (i === 5) {
        // htlFrames.src =
        //   "https://www.tripadvisor.com/Hotel_Review-g32655-d111751-Reviews-Hotel_Bel_Air-Los_Angeles_California.html";
        htlListCtnr.appendChild(htlFrames);
      } else if (i === 6) {
        // htlFrames.src =
        //   "https://www.tripadvisor.com/Hotel_Review-g32655-d250393-Reviews-Chateau_Marmont-Los_Angeles_California.html";
        htlListCtnr.appendChild(htlFrames);
      }
    }
  } else if (destinationOpt[1]) {
  } else if (destinationOpt[2]) {
  } else if (destinationOpt[3]) {
  }
});
