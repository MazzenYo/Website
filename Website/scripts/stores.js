let onclickZoom = 18;
function initMap() {
  /*Position of store and center between them*/
  const london = {lat: 51.512515901508145, lng: -0.13969580231639653}
  const newYork = {lat: 40.76828876161947, lng: -73.98222633902594}
  const paris = {lat: 48.8640314571697, lng: 2.3338397685283185}
  const center = {lat: (london.lat+newYork.lat+newYork.lat+paris.lat)/4,
                  lng: (london.lng+newYork.lng+newYork.lng+paris.lng)/4}
  /*Die Karte an sich mit Standard Controls*/
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: center,
    disableDefaultUI: true,
    scaleControl: true,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.MEDIUM
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  /*Fügt die verschiedenen Stores auf die Karte hinzu.*/
  const markerLondon = new google.maps.Marker({
    position: london,
    map: map,
  });
  const markerNewYork = new google.maps.Marker({
    position: newYork,
    map: map,
  });
  const markerParis = new google.maps.Marker({
    position: paris,
    map: map,
  });
  /*Fügt den Markern Onclick Events durch, dass bei Klick auf diese gezoomt wird.*/
  markerLondon.addListener("click", () => {
    map.setZoom(onclickZoom);
    map.setCenter(markerLondon.getPosition());
    location[0].innerHTML = "LONDON";
    street[0].innerHTML = "180-182 REGENT STREET, LONDON, W1B 5BT"
    street2[0].innerHTML = " 180-182 Regent Street, London, W1B 5BT";
  });
  markerNewYork.addListener("click", () => {
    map.setZoom(onclickZoom);
    map.setCenter(markerNewYork.getPosition());
    location[0].innerHTML = "NEW YORK";
    street[0].innerHTML = "109 COLUMBUS CIRCLE, NEW YORK, NY 10023"
    street2[0].innerHTML = " 109 Columbus Circle, New York, NY 10023";
  });
  markerParis.addListener("click", () => {
    map.setZoom(onclickZoom);
    map.setCenter(markerParis.getPosition());
    location[0].innerHTML = "PARIS";
    street[0].innerHTML = "2133 RUE SAINT-HONORÉ, 75001 PARIS"
    street2[0].innerHTML = " 2133 Rue Saint-Honoré, 75001 Paris";
  });
  /*Obere Knöpfe auch Zoom-Funktion. NameDetail streetDetail fa fa-map-marker*/
  let buttons = document.getElementsByTagName("BUTTON");
  let location = document.getElementsByClassName("NameDetail");
  let street = document.getElementsByClassName("streetDetail");
  let street2 = document.getElementsByClassName("markerText");
  buttons[0].addEventListener("click", () => {
    map.setZoom(onclickZoom);
    map.setCenter(markerLondon.getPosition());
    location[0].innerHTML = "LONDON";
    street[0].innerHTML = "180-182 REGENT STREET, LONDON, W1B 5BT"
    street2[0].innerHTML = " 180-182 Regent Street, London, W1B 5BT";
  });
  buttons[1].addEventListener("click", () => {
    map.setZoom(onclickZoom);
    map.setCenter(markerNewYork.getPosition());
    location[0].innerHTML = "NEW YORK";
    street[0].innerHTML = "109 COLUMBUS CIRCLE, NEW YORK, NY 10023"
    street2[0].innerHTML = " 109 Columbus Circle, New York, NY 10023";
  });
  buttons[2].addEventListener("click", () => {
    map.setZoom(onclickZoom);
    map.setCenter(markerParis.getPosition());
    location[0].innerHTML = "PARIS";
    street[0].innerHTML = "2133 RUE SAINT-HONORÉ, 75001 PARIS"
    street2[0].innerHTML = " 2133 Rue Saint-Honoré, 75001 Paris";
  });
}

document.addEventListener("DOMContentLoaded",() => {
  setTimeout(() => {
      initMap();
    }, 25);
})
