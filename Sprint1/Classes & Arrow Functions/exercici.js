// Classes & Arrow Functions

//Nivell 1
const suma = ((x , y) =>{
    return x + y
})(5, 7)


//Nivell 2
//Exercici 1
const returnObj = (parametre)=>{
    return {
        atribut : parametre,
    }
}

//Exercici 2
class Persona  {
    decirNombre(){
        console.log(this.nom)
    }
}

const jo = new Persona()
jo.nom = 'Bader'
jo.decirNombre()


//Nivell 3
function creadorObj(nom, cognom, edat){
    return {
        nom : nom,
        cognom: cognom,
        edat: edat,
    }

}

let dwight = creadorObj('Dwight', 'Shrute', 53)
let jim = creadorObj('Jim', 'Halpert', 43)


