<text>
Currying 
- Técnica de transformar uma função com N parâmetros em apenas uma função
que recebe um parâmetro. E para cada parâmetro retornamos uma nova função. 
</text>

function soma(a) {
    return function(b) {
        return a + b
    }
}

// Retorna a função soma e armazena no soma2. O 'a' sempre será 2
const soma2 = soma(2)

/*

function soma(a, b) {
    return a + b
}

Observe como o primeiro parâmetro repete muitas vezes. 
Podemos evitar isso com o currying. 

soma2(2, 4)
soma2(2, 1)
soma2(2, 3)
soma2(2, 0)

Então isso, vira isso: 
*/

soma2(4)
soma2(1)
soma2(3)
soma2(0)