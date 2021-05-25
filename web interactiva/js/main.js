let ubicacionPrincipal = window.pageYOffset;

  AOS.init();

window.addEventListener("scroll",() => {
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px";
    }else{
        document.getElementsByTagName("nav")[0].style.top ="-100px";
    }
    ubicacionPrincipal = desplazamientoActual;
})

//Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true ;

document.querySelectorAll(".hamburguer")[0].addEventListener("click",() =>{
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color="#fff";
        semaforo=false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color="#000";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos");
})