
let mymap = L.map('mapid').setView([0,0], 1);
let myIcon = L.icon({
    iconUrl:'spacefile.png',
    iconSize: [50,32],
    iconAnchor: [-3],
    popupAnchor: [-3,-76],
});

let marker = L.marker([0,0], {icon:myIcon} ).addTo(mymap);

function onMap(){
    
    marker.bindPopup("<b> Kalle e fan cool!</b>").openPopup();
    
    
    
};

marker.on("mouseover",onMap);








let attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
let tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

let tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(mymap);

let firstTime = true;
let api_url = 'https://api.wheretheiss.at/v1/satellites/25544'
async function getISS(){
    let response = await fetch(api_url) // hämnta data
    let data = await response.json();
    let { latitude, longitude,daynum, } = data 
    
    // L.marker add  to mymap
    marker.setLatLng([latitude,longitude,daynum,  ]);
    
    
    if(firstTime){
        mymap.setView([latitude,longitude,2]);
        firstTime = false;
    }
    
    let lon =  document.querySelector(".lon").textContent = longitude;
    let lat =   document.querySelector(".lat").textContent = latitude;
    let day =   document.querySelector(".day").textContent = daynum;
    
}
getISS();
 //setInterval(getISS, 1000);






/*
function toggleMenu(){
    let element = document.querySelector("nav"); // hämntar in html element = tagen nav . 
    element.classList.toggle("menu-hidden"); // hämntar in class name på nav tag och läger på en method = toggle.med variabel element.och CLASS list som är Domtoken.
    
    element.document.querySelector(".fade-layer");
    element.classList.toggle("hidden");
    
    
}
let element = document.querySelector("#menu-btn"); // hämntar in hamburgare meny .
element.addEventListener("click", toggleMenu ); // sätter på click event på functionen toggleMenu. 
element = document.querySelector(".fade-layer");  // använd = annars underfind. 
element.addEventListener("click", toggleMenu);//  method. 
*/







