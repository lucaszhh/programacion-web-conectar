// Nodos capturados (Nodo = Etiqueta)

const input = document.querySelector("input")
const boton = document.querySelector("button")
const contenedor = document.querySelector(".contenedor")

boton.addEventListener("click",() => comentar())

//escuchar el evento de click
function comentar() {
    //capturar el valor del input
    console.log(input.value)
    //añadir al contenedor el valor del input
    contenedor.innerHTML = `<p>${input.value}</p>`
    input.value = ""
}