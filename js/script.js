//BRON hamburgermenu inspiratie: https://codepen.io/Guilano/pen/jOOgZKE

// Variabelen opstellen: select the HTML elements which you want to manipulate
var hamburgerbutton = document.querySelector('.hamburgerbutton');
//var lijn = document.querySelector('.lijn');
var navigation = document.querySelector('.navigation');

// Hier hang ik een oortje aan de hamburgermenu die checkt of er een klik plaatsvind.
// Bij een click wordt de functie hamburgeranimatie gerunned.
hamburgerbutton.addEventListener('click', hamburgerAnimatie);

// Deze functie toggled de classes hamburgerbutton en navigation. Deze kun je in css vinden.
function hamburgerAnimatie() {
    hamburgerbutton.classList.toggle('active');
    navigation.classList.toggle('active');
}
