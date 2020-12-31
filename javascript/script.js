// Menu de navigation pour téléphone

function menu() {
    document.querySelector("nav").classList.toggle("ouvert");
    document.querySelector("#hamburger-button").classList.toggle("burger2");
}

// pointeur

function moveCible(event){
    var e = document.getElementById("Cible");
    e.style.transform = "translate("+event.clientX+"px, "+event.clientY+"px)";
    e.classList.remove("anim_Cible");
    e.offsetWidth;
    e.classList.add("anim_Cible");
}

// bar de scroll animé

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset/totalHeight)*100;
    progress.style.height = progressHeight + "%";
}

//////////////////////////////
/////// Animation 3D /////////
//////////////////////////////

///// EQUIPE
//Movement Animation to happen
const trombinoscope = document.querySelector(".trombinoscope");
const partie1 = document.querySelector(".partie1");

//Moving Animation Event
partie1.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
  trombinoscope.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
partie1.addEventListener("mouseenter", (e) => {
  trombinoscope.style.transition = "none";
});
//Animate Out
partie1.addEventListener("mouseleave", (e) => {
  trombinoscope.style.transition = "all 0.5s ease";
  trombinoscope.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

