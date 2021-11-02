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
let levels = 100;

if (difficulty == 'basso') {
    levels = 100;
}

if (difficulty == 'medio') {
    levels = 81;
}

if (difficulty == 'alto') {
    levels = 49;
}


const grill = document.getElementById("container");

for (let i = 0; i < levels; i++) {
    let newElement = generaElemento("div", "square");

    newElement.addEventListener("click",
        function() {
            newElement.classList.add("clicked-active");
        }
    );

    grill.appendChild(newElement);
}