//Design Patterns

/*
Padrões de projetos, soluções generalistas para problemas recorrentes
durante o desenvolvimento de software 

Não é um framework ou código pronto, mas sim uma definição de alto nível
de como um problema comum pode ser solucionado

Mais utilizados:

*/

//Factory: 

function FakeUser() {
    return {
        name: 'Gisele',
        lastName: 'Mara'
    }
}

const user = FakeUser() 

// Não seria factory se fosse:
const user = new FakeUser()

// Singleton: criar uma instância e toda vez que usa-la retornar a mesma instância

function Pessoa() {
    if (!Pessoa.instance) {
        return Pessoa.instance = this
    }

    return Pessoa.instance 
}

const p = Pessoa.call({ name: "Gisele" }) // Gisele
const p2 = Pessoa.call({ name: "Bruna" }) // Gisele

// Ao instanciar uma vez, mesmo em contexto diferente ele retornará a mesma instância

// Decorator: uma função que recebe outra função e extende seu comportamento sem modificar explicitamente

let loggedIn = false 

function callIfAutheticated(fn) {
    return !loggedIn && fn()
}

function sum(a, b) {
    return a + b
}

callIfAutheticated(() => sum(2, 3)) //false 
loggedIn = true
callIfAutheticated(() => sum(2, 3)) 
loggedIn = false 
callIfAutheticated(() => sum(2, 3)) 

// Observer: manter subscribers e observers. Toda vez que o observer alterar ele chama um subscriber
// Toda vez que tiver uma alteração no estado, quem estiver escutando será avisado

//Module: possibilita organizar melhor o código sem necessidade de expor variáveis globáis

class Person() {
    ...
}

export default Person

------
import Person from './modules/Person'
