// // Promises & Callbacks

// //NIVELL 1

// //Exercici 1
function promesa(succes) {
  return new Promise((resolve, reject) => {
    succes ? resolve("succeded") : reject(new Error("Error!"));
  }).catch((e) => console.log(e.message));
}

let succes = promesa(true).then((result) => console.log(result));
let failure = promesa(false);

// //Exercici 2
const imprimir = (num) => (num >= 10 ? console.log("Si") : console.log("No"));

const mesGran10 = (num, imprimir) => {
  imprimir(num);
};

mesGran10(11, imprimir);
mesGran10(7, imprimir);
