//Menú lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function MostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true
    }
    else{
        nebu.style.display = "none"
        menu_visible = false
    }
}

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none"
        menu_visible = false
    }
}