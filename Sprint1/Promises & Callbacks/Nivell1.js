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

//NIVELL 2

let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

const getEmpleado = (id) => {
  let result = new Promise((resolve, reject) => {
    let empleat;
    for (let x of employees) {
      if (x.id === id) {
        empleat = x;
        break;
      }
    }
    empleat ? resolve(empleat) : reject(new Error("No s'ha trobat l'empleat"));
  }).catch((e) => (result = e.message));

  return result;
};


const getSalario = (empleat) =>{
    for (let x of salaries) {
        if (x.id === empleat.id) {
          return x.salary
        }
      }
    new Error("No s'ha trobat l'empleat")
}

let esTrobaEmpleat = getEmpleado(2)
  .then((result) => console.log(result))
  .catch((e) => console.log(e));


let noEsTrobaEmpleat = getEmpleado(5)
  .then((result) => console.log(result))
  .catch((e) => console.log(e));

let salario = getSalario(employees[1])
console.log(salario)