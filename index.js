const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const menuH2 = document.getElementById("menu_h2");

function openMenu() {
    if (hamburger.style.color === "black") {
        hamburger.style.color = "yellow";
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