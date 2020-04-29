// Rest operator ...

function sum(...args) {
    console.log(args) // retorna um array [5, 5, 5, 2, 3]
    return args.reduce((acc, value) => acc + value, 0 )
}

sum(5, 5, 5, 2, 3) // 20


// Spread operator ...

const str = 'Digital Innovation One'
                //rest
function logArgs(...args) {
    console.log(args)
}

        //spread
logArgs(...str) // Retorna a string quebrada em caracteres