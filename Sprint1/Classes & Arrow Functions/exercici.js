// Classes & Arrow Functions

//Nivell 1
console.log('Nivell 1: Imprimex consola funció autoinvocable que sumi dos nombres')
console.log(((x , y) =>{
    return x + y
    
})(5, 7))
console.log('----------')


//Nivell 2
//Exercici 1
console.log('Nivell 2 Exercici 1: funció que retorna obj amb parametre rebut')
const returnObj = (parametre)=>{
    return {
        nom : parametre,
    }
}

console.log(returnObj('Bader'))
console.log('----------')

//Exercici 2
console.log('Nivell 2 Exercici 2: classe amb parametre nom i mètode decirNombre')
class Persona1  {
    constructor(nom){
        this.nom = nom
    }
    decirNombre(){
        console.log(this.nom)
    }
}

const jo = new Persona1('Bader')
jo.decirNombre()
console.log('----------')

//Nivell 3 
console.log("Nivell 3: classe abstracta")

const Persona = function() {
    if (this.constructor === Persona) {
      throw new Error("Can't instantiate abstract class!");
    } 
 
};

Persona.prototype.dades = function() {
    throw new Error("Abstract method!");
}

const Empleat = function() {
    Persona.apply(this, arguments);
};

Empleat.prototype = Object.create(Persona.prototype);
Empleat.prototype.constructor = Empleat;

Empleat.prototype.dades = function(nom, cognom, edat) {
    console.log( {
        nom : nom,
        cognom: cognom,
        edat: edat,
    })
}

const dwight = new Empleat();


Empleat.prototype = Object.create(Persona.prototype);
Empleat.prototype.constructor = Empleat;

Empleat.prototype.dades = function(nom, cognom, edat) {
    console.log( {
        nom : nom,
        cognom: cognom,
        edat: edat,
    })
}

const jim = new Empleat();

dwight.dades('Dwight', 'Shrute', 53);
jim.dades('Jim', 'Halpert', 43);

