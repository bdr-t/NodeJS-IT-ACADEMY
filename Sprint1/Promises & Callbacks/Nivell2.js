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

console.log("Nivell 2 Exercici 1: funció que retorni una Promise efectuant la cerca en l'objecte pel seu id")
export const getEmpleado = (id) => {
  let result = new Promise((resolve, reject) => {
    let empleat;
    for (let x of employees) {
      if (x.id === id) {
        empleat = x;
        break;
      }
    }
    empleat ? resolve(empleat) : reject(new Error("No s'ha trobat l'empleat"));
  });

  return result;
};
console.log("Nivell 2 Exercici 1: funció que retorni salari")
export const getSalario = (empleat) => {
  let result = new Promise((resolve, reject) => {
    let salari;
    for (let x of salaries) {
      if (x.id === empleat.id) {
        salari = x.salary;
      }
    }
    salari ? resolve(salari) : reject(new Error("No s'ha trobat l'empleat"));
  });

  return result;
};


console.log("Nivell 2 Exercici 3: s'invocaran funcions getEmplado i getSalarios")

let esTrobaEmpleat = getEmpleado(2)
  .then((result) => console.log(result))
  .catch((e) => console.log(e.message));


let noEsTrobaEmpleat = getEmpleado(5)
  .then((result) => console.log(result))
  .catch((e) => console.log(e.message)); // Nivell 3. exercici 1

let salario = getSalario(employees[1])
  .then((result) => console.log("salario ", result))
  .catch((e) => console.log(e.message));
