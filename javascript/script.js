function menu() {
    document.querySelector("nav").classList.toggle("ouvert");
    document.querySelector("#hamburger-button").classList.toggle("burger2");
}


function moveCible(event){
    var e = document.getElementById("Cible");
    e.style.transform = "translate("+event.clientX+"px, "+event.clientY+"px)";
    e.classList.remove("anim_Cible");
    e.offsetWidth;
    e.classList.add("anim_Cible");
}