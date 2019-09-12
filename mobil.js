

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



