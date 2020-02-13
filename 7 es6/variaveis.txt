TIPOS E VARIÁVEIS

var 
- Introduzido desde o começo do JS
- Escopo global
- Não é boa prática escrever em escopo global (window no browser)

let 
- Introduzido no ES6
- Escopo de bloco {}

const 
- Introduzido no ES6
- Escopo de bloco {}
- Ao atribui-lo à um tipo primitivo não é possível alterar seu valor.
- Já um objeto/array seus valores internos podem ser alterados, PORÉM
seu ponteiro não pode ser alterado. Exemplo: 

X CAN'T BE DONE X
const people = ["John", "Jane", "Mary"]
people = []

V CAN BE DONE V 
people.push("Mary")
OR
people[2] = "Mary"

- É possível 'congelar' as propriedades do objeto para não poderem 
ser trocadas nunca. 

*

TIPOS PRIMITIVOS

- String
- Number
- Boolean
- Null
- undefined
- Symbol (novo no ECMAScript 6)