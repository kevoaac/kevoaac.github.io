
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");



abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})




// BOTONES SECCION
const texto = document.querySelector("#texto");
const btnfuente = document.querySelector("#btnfuente");
const btncolor = document.querySelector("#btncolor");
const btnsize = document.querySelector("#btnsize");
const btnreset = document.querySelector("#btnreset");


let estilo = ''

btnfuente.addEventListener("click", () => {
    if (btnfuente.classList.contains("usado")) {
        estilo = estilo.replace('font-family: impact', '');
        texto.style = estilo;
        btnfuente.classList.remove("usado");
        return
    }

    estilo = estilo + 'font-family: impact; font-weight:lighter;'
    texto.style = estilo;

    btnfuente.classList.add("usado");

})

btncolor.addEventListener("click", () => {
    if (btncolor.classList.contains("usado")) {
        estilo = estilo.replace('color: darkcyan;', '');
        texto.style = estilo;
        btncolor.classList.remove("usado");
        return
    }

    estilo = estilo + 'color: darkcyan;'
    texto.style = estilo;

    btncolor.classList.add("usado");

})

btnsize.addEventListener("click", () => {
    if (btnsize.classList.contains("usado")) {
        estilo = estilo.replace('font-size: 3rem;', '');
        texto.style = estilo;
        btnsize.classList.remove("usado");
        return
    }

    estilo = estilo + 'font-size: 3rem;'
    texto.style = estilo;

    btnsize.classList.add("usado");

})

btnreset.addEventListener("click", () => {

    estilo = estilo + 'font-family: sans-serif; color: black;font-size: 2rem; font-weight:normal;'
    texto.style = estilo;

})





// INPUT------------------------------------------------------



const palabras = document.querySelector("#input");

palabras.addEventListener('keyup', () => {
    if (palabras.value == '') {
        texto.textContent = 'Hola Mundo'
        return
    }
    texto.textContent = palabras.value;
})


