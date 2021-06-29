// Classes & Arrow Functions

//Nivell 1
console.log('Nivell 1: Imprimex consola funció autoinvocable que sumi dos nombres')
const suma = ((x , y) =>{
    return x + y
    
})(5, 7)
console.log(suma)
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
class Persona  {
    constructor(nom){
        this.nom = nom
    }
    decirNombre(){
        console.log(this.nom)
    }
}

const jo = new Persona('Bader')
jo.decirNombre()
console.log('----------')

//Nivell 3 
console.log("Nivell 3: funció creadora d'objetes")
function creadorObj(nom, cognom, edat){
    return {
        nom : nom,
        cognom: cognom,
        edat: edat,
    }

}

console.log(creadorObj('Dwight', 'Shrute', 53))
console.log(creadorObj('Jim', 'Halpert', 43))


