const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const menuH2 = document.getElementById("menu_h2");
const spinner = document.getElementById("spinner");

var tag = document.createElement("h2");
var awards = document.createTextNode("Awards");
tag.appendChild(awards);
menuH2.appendChild(tag);

function openMenu() {
    if (hamburger.style.color === "black") {
        hamburger.style.color = "white";
        hamburger.innerText = "menu_open";
        menu.style.transform = "translateY(0vh)";
        menuH2.style.transform = "translateY(0vh)";
        // menuH2.style.transform = "translateY(0vh)";
      } else {
        hamburger.style.color = "black";
        hamburger.innerText = "menu";
        menu.style.transform = "translateY(-100vh)";
        menuH2.style.transform = "translateY(-100vh)";
      }
    
}

hamburger.addEventListener("click",openMenu);

function delaySpinner () {
  spinner.style.display = "none";
}

function showSpinner () {
  spinner.style.opacity = "0";
  setTimeout (delaySpinner, 300);
}

window.addEventListener("load",showSpinner);
