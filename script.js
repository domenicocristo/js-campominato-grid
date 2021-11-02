// 1. chiedere all'utente il livello di difficoltà
// 2. in base alla scelta presa dall'utente creare una griglia con il numero di quadrati prestabilito
// 3. dare un click che cambia colore ai quadrati, in modo che facciano capire all'utente che il quadrato è stato cliccato

// funzioni 

function generaElemento(elementGen, classPlus) {
    let node = document.createElement(elementGen);
    node.classList.add(classPlus);
    return node
}

let difficulty = prompt("Scegli il tuo livello di difficoltà: basso medio alto");
// var levels = ["basso", "medio", "alto"];

const basso = 100;
const medio = 81;
const alto = 49;

const grill = document.getElementById("container");

for (let i = 0; i < difficulty; i++) {
    let newElement = generaElemento("div", "square");

    newElement.addEventListener("click",
        function() {
            newElement.classList.add("clicked-active");
        }
    );

    grill.appendChild(newElement);
}