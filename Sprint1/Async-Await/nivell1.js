//NIVELL 1


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


//Exercici 1
const getEmpleado = async (id) => {
  let result = await new Promise((resolve, reject) => {
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

const getSalario = async (empleat) => {
    let result = await new Promise((resolve, reject) => {
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


getEmpleado(1).catch(e => console.log(e.message))
getEmpleado(5).catch(e => console.log(e.message))
getSalario(employees[0]).catch(e => console.log(e.message))



//Exercici 2
async function getEmpleadoSalario(id){
    const empleado = await getEmpleado(id)
    const salario = await getSalario(empleado)
    console.log(`L'empleat ${empleado.name} té un salari de ${salario}`)
}

getEmpleadoSalario(1)