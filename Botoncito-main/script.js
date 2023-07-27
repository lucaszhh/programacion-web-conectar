function touch(){
    alert("TOUCH ME")
    document.querySelector(".botontoutch").classList.toggle(".touchme")
}

function generarGatito(){
    document.querySelector(".contenedor").innerHTML += '<div class="cuadrado"></div>'
}