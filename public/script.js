const validTallaRopa = ["XS", "S", "M", "L", "XL"];
const validTallaZapatillas = [37,38,39,40,41,42,43,44,45,46,47];

window.onload = main();

function main() {
    const selectorTalla = document.getElementById("talla");
    const selectorCategoria = document.getElementById("categoria");
    
    // event listener que se ejecuta cuando se selecciona una opción en el selector de categoría
    selectorCategoria.addEventListener("change", ()=>{
        selectorTalla.innerHTML = "";
        if (selectorCategoria.value == "Zapatos") {
            for (let i = 0; i < validTallaZapatillas.length; i++) {
                const opt = document.createElement("option");
                opt.value = validTallaZapatillas[i];
                opt.text = validTallaZapatillas[i];
                selectorTalla.appendChild(opt);
            }
        } else {
            for (let i = 0; i < validTallaRopa.length; i++) {
                const opt = document.createElement("option");
                opt.value = validTallaRopa[i];
                opt.text = validTallaRopa[i];
                selectorTalla.appendChild(opt);
            }
        } 
    })
}