//Functions & Template Literals

//Nivel 1
console.log('Nivell 1: Funció que imprimexi nom en consola. Invocada externament')
console.log('--------')
function imprimirNom(nom){
    console.log(nom)
}

imprimirNom('Bader')

//Nivell 2
console.log('--------')
console.log('Nivell 2: Funció que imprimeix en consola nom y cognom utilitzant template literals')
console.log('--------')

function imprimirNomCognom(nom, cognom){
    console.log(`Nom: ${nom}, Cognom: ${cognom}`)
}

imprimirNomCognom('Bader', 'Tabeche')


//Nivell 3 
console.log('--------')
console.log("Nivell 3 Exercici 1: Matriu amb deu funciones que s'hauran d'invocar iterativament")
console.log('--------')
let matriu = []

function imprimeixNums(){
    for (let num = 0; num <= 9; num++){
        console.log(num)
    }
}

(function(){
    for (let num = 0; num <= 9; num++){
        matriu.push(imprimeixNums)
    }
})()


for (let element of matriu){
    element()
    console.log('--------')
}


console.log('Nivell 3 Exercici 2: Funció autoinovcable')
console.log('--------')
const autoinvocableNom = (function(nom) {
    console.log(nom);
    })(nom = 'Bader');