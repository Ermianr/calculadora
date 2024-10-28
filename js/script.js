const botones = document.querySelectorAll ("button");
const display = document.querySelector("#display");
const resultadoBoton = document.querySelector("#igual");
const borrar = document.querySelector("#borrar");
const borrarTodo = document.querySelector("#borrar-todo");
let expresion = "";


botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        const valor = e.target.value;
        expresion += valor;
        display.innerText += valor;
        console.log(expresion);
    })
})


resultadoBoton.addEventListener("click", () => {
    let resultado = operar(expresion);
    display.innerText = resultado;
})

borrar.addEventListener("click", () => {
    if (expresion) {
        expresion = expresion.slice(0, -1);
        display.innerText = display.innerText.slice(0, -1);
    }
})

borrarTodo.addEventListener("click", () => {
    if (expresion) {
        expresion = "";
        display.innerText = "";
    }
}) 

const operar = (operacion) => {
    return new Function("return " + operacion)();
}
