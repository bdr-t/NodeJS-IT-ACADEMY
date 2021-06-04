//NIVELL 2 Y 3


function resolveAsync(){
    let promise = new Promise((resolve, reject)=>{

        setTimeout(()=> resolve('succeded'), 2000)
    })
    return promise
}


async function asyncFunc(){
    const response = await resolveAsync().catch(e => e.message)
    console.log(response)
}

let prueba = asyncFunc()
