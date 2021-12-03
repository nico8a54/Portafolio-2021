const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const menuH2 = document.getElementById("menu_h2");
const spinner = document.getElementById("spinner");
const header = document.getElementsByTagName("header");

//Menu desplegable//
const aHome = document.createElement ("a");
const h2Home = document.createElement ("h2");
aHome.appendChild(h2Home);
aHome.href = "./";
h2Home.innerHTML= "Home";
menuH2.appendChild(aHome);

const aDigital = document.createElement ("a");
const h2Digital = document.createElement ("h2");
aDigital.appendChild(h2Digital);
aDigital.href = "./digital.html";
h2Digital.innerHTML= "Digital Design";
menuH2.appendChild(aDigital);

const aProduct = document.createElement ("a");
const h2Product = document.createElement ("h2");
aProduct.appendChild(h2Product);
aProduct.href = "./product.html";
h2Product.innerHTML= "Product Design";
menuH2.appendChild(aProduct);

const aTeamBuilder = document.createElement ("a");
const h2TeamBuilder = document.createElement ("h2");
aTeamBuilder.appendChild(h2TeamBuilder);
aTeamBuilder.href = "./team-builder.html";
h2TeamBuilder.innerHTML= "Team Builder";
menuH2.appendChild(aTeamBuilder);

const aTalks = document.createElement ("a");
const h2Talks = document.createElement ("h2");
aTalks.appendChild(h2Talks);
aTalks.href = "./talks.html";
h2Talks.innerHTML= "Talks";
menuH2.appendChild(aTalks);

const aAwards = document.createElement ("a");
const h2Awards = document.createElement ("h2");
aAwards.appendChild(h2Awards);
aAwards.href = "./awards.html";
h2Awards.innerHTML= "Awards";
menuH2.appendChild(aAwards);

menu.appendChild(menuH2);




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
  spinner.style.opacity = "0.1";
  setTimeout (delaySpinner, 300);
}

window.addEventListener("load",showSpinner);
