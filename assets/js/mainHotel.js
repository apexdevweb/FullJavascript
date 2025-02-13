document.addEventListener("DOMContentLoaded", () => {
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
    "Choisir une destination pour voir les hotels disponibles";
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

  // Ajout des options dans le select
  destinationOpt.forEach((desti) => {
    let slctOpt = document.createElement("option");
    slctOpt.value = desti;
    slctOpt.textContent = desti;
    slctOpt.setAttribute("class", "selectOption");
    htlslct.appendChild(slctOpt);
  });

  // Container pour afficher l'image du hotel en fonction de la selection
  let htlListCtnr = document.createElement("div");
  htlListCtnr.setAttribute("class", "htlListe");
  hotelCtnr.appendChild(htlListCtnr);

  let htlLink = document.createElement("iframe");
  htlLink.style.width = "800px";
  htlLink.style.height = "600px";
  htlLink.setAttribute("class", "hotelImg");

  // Event listener pour ecouter les changements dans le select
  htlslct.addEventListener("change", (event) => {
    let selectedDestination = event.target.value;
    console.log("Destination choisie:", selectedDestination);

    // Réinitialiser l'image affichée
    htlListCtnr.innerHTML = " ";

    // Affichage d'une image différente en fonction de la destination choisie
    if (selectedDestination === "Californie") {
      htlLink.src =
        "https://www.tripadvisor.com/Hotel_Review-g152515-d14210078-Reviews-Hotel_Riu_Palace_Baja_California-Cabo_San_Lucas_Los_Cabos_Baja_California.html"; // Remplacer par le bon chemin
    } else if (selectedDestination === "Thailande") {
      htlLink.src =
        "https://www.tripadvisor.com/Hotel_Review-g152516-d8461716-Reviews-Viceroy_Los_Cabos-San_Jose_del_Cabo_Los_Cabos_Baja_California.html"; // Remplacer par le bon chemin
    } else if (selectedDestination === "Cuba") {
      htlLink.src =
        "https://www.tripadvisor.com/Hotel_Review-g152516-d248157-Reviews-Royal_Solaris_Los_Cabos-San_Jose_del_Cabo_Los_Cabos_Baja_California.html"; // Remplacer par le bon chemin
    } else if (selectedDestination === "Hawai") {
      htlLink.src =
        "https://www.tripadvisor.com/Hotel_Review-g150773-d1742040-Reviews-Prana_del_Mar-Los_Cabos_Baja_California.html"; // Remplacer par le bon chemin
    } else if (selectedDestination === "Cote-azure") {
      htlLink.src =
        "https://www.tripadvisor.com/Hotel_Review-g187221-d219954-Reviews-Carlton_Cannes_A_Regent_Hotel-Cannes_French_Riviera_Cote_d_Azur_Provence_Alpes_Cote_d_A.html";
    } else if (selectedDestination === "Italie") {
      htlLink.src =
        "https://www.tripadvisor.com/Hotel_Review-g187855-d8333271-Reviews-Turin_Palace_Hotel-Turin_Province_of_Turin_Piedmont.html";
    } else if (selectedDestination === "Espagne") {
      htlLink.src =
        "https://www.tripadvisor.com/Hotel_Review-g1010182-d25432549-Reviews-Ikos_Porto_Petro-Porto_Petro_Majorca_Balearic_Islands.html";
    } else if (selectedDestination === "Grece") {
      htlLink.src =
        "https://www.tripadvisor.com/Hotel_Review-g635864-d324555-Reviews-Anastasis_Apartments_Spa-Imerovigli_Santorini_Cyclades_South_Aegean.html";
    }
    // Ajout de l'iframe au conteneur
    htlListCtnr.appendChild(htlLink);
  });
});
