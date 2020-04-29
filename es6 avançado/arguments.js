// Argumentos default para funções

function multiply (a, b) {
    return a * b
}

multiply(5, 5) // 25

/* Sem parâmetro explícito retorna undefined
para resolver isso antigamente os programadores
usavam o seguinte modo: 
*/

function multiply (a, b) {
    b = b || 1 // 1 como valor default
}

// Porém com o ES6 há uma nova forma de definir esse valor

function multiply (a, b = 1) { 
    return a * b
}

// Dessa forma 1 é o valor padrão para b
// Também é possível referir à outros parâmetros
function multiply (a, b = a) {
    return a * b
}

multiply(2) // 4




