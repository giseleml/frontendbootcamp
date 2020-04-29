// Enhanced Object Literals

// Maneira clássica de atribuir valores à objetos

var obj = {
    nome: 'Gisele'
}

// Também é possível usar variáveis 

const nome = 'Gisele'

var obj = { 
    nome: nome
}

// Porém dessa forma repetimos os nomes
// Podemos usar então o seguinte shorthand com o ES6

var obj = {
    nome
}

// Métodos com ES6

var obj = {
    sum(a, b) { // omitindo a palavra function
        return a + b
    }
}