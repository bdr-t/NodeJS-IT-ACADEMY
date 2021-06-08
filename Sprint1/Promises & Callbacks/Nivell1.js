// // Promises & Callbacks

// //NIVELL 1

// //Exercici 1
function promesa(succes) {
  return new Promise((resolve, reject) => {
    succes ? resolve("succeded") : reject(new Error("Error!"));
  });
}

let succes = promesa(true).then((result) => console.log(result)).catch(e => console.log(e.message));
let failure = promesa(false).then((result) => console.log(result)).catch(e => console.log(e.message));

// //Exercici 2

console.log('Nivell 1 Exercici 2: funció amb callback')
const imprimir = (num) => (num >= 10 ? console.log("Si") : console.log("No"));

const mesGran10 = (num, imprimir) => {
  imprimir(num);
};

mesGran10(11, imprimir);
mesGran10(7, imprimir);
console.log('----------')
console.log('Nivell 1 Exercici 1: funció que retrorna promesa')
