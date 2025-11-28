function activarMenu() {
    const toggleBtn = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");
    
    sideMenu.classList.toggle("open");
    
}


// ---- Configuración de consumos por electrodoméstico ----
const consumos = {
    contador1: { valor: 0, aumento: 3, intervalo: null, boton: "btn1" },
    contador2: { valor: 0, aumento: 5, intervalo: null, boton: "btn2" },
    contador3: { valor: 0, aumento: 2, intervalo: null, boton: "btn3" },
    contador4: { valor: 0, aumento: 4, intervalo: null, boton: "btn4" },
    contador5: { valor: 0, aumento: 6, intervalo: null, boton: "btn5" }
};


// ---- Función general para prender/apagar ----
function toggleElectrodomestico(idContador) {
    const item = consumos[idContador];
    const boton = document.getElementById(item.boton);

    // Si está encendido → APAGAR
    if (item.intervalo !== null) {
        clearInterval(item.intervalo);
        item.intervalo = null;

        // Resetear contador
        item.valor = 0;
        document.getElementById(idContador).textContent = "0 W";

        actualizarTotal();

        // Cambiar estilo del botón
        boton.style.backgroundColor = "green";
        boton.textContent = "ENCENDER";
        return;
    }

    // Si está apagado → ENCENDER
    boton.style.backgroundColor = "red";
    boton.textContent = "APAGAR";

    item.intervalo = setInterval(() => {
        item.valor += item.aumento;
        document.getElementById(idContador).textContent = item.valor + " W";
        actualizarTotal();
    }, 1000);
}


// ---- Suma de todos los consumos ----
function actualizarTotal() {
    let total = 0;

    for (let key in consumos) {
        total += consumos[key].valor;
    }

    document.querySelector(".container_total p").textContent =
        "CONSUMO DE ENERGIA TOTAL: " + total + " W";
}


// ---- Funciones conectadas a los botones ----
function iniciarConteo1() { toggleElectrodomestico("contador1"); }
function iniciarConteo2() { toggleElectrodomestico("contador2"); }
function iniciarConteo3() { toggleElectrodomestico("contador3"); }
function iniciarConteo4() { toggleElectrodomestico("contador4"); }
function iniciarConteo5() { toggleElectrodomestico("contador5"); }
