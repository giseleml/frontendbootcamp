// Programação Orientada à Objetos

/*

Herança
Em JS é baseada em protótipos (PROTOTYPE) = Armazena as definições do nosso objeto. __proto__ aponta o prototype do tipo
que a gente criou. Esse 'tipo' se chama Constructor. Baseado nele é criado o prototype. 

Operador NEW
new Foo(...) - Um novo objeto é criado à partir da função construtura e ele herda Foo.prototype. 
Seu retorno explícito é baseado no prototype.

*/

function Animal(qtdPatas) {
    this.qtdPatas = qtdPatas // Será atribuído à pug pro causa do .call()
}

function Catiorro(morde) {
    Animal.call(this, 4) // Passa o contexto de this de Catiorro para Animal

    this.morde = morde 
}

const pug = new Catiorro(false)

console.log(pug) // Catiorro {qtdPatas: 4, morde: false}

// É possível escrever diretamente no prototype, para definir coisas por padrão para todo novo objeto

function Animal() {
    Animal.prototype.qtdPatas = 0
    Animal.prototype.movimentar = function() {

    }
}

function Catiorro(morde) {
    this.qtdPatas = 4
    this.morde = morde
}

Catiorro.prototype = Object.create(Animal)

Catiorro.prototype.latir = function() {
    console.log("Au au!")
}

const pug = new Catiorro(false)

// Classes
//Simplificação da herança de protótipos

class Animal {
    constructor(qtdPatas) {
        this.qtdPatas = 4
    }
}

class Catioro extends Animal {
    constructor(morde) {
        super(4)
        this.morde = 4
    }
}

const pug = new Cachorro(false)

// Modificadores de acesso (privado/público)

this.getName = function()
 {
     return name
 }

 person.getName() // Name
 person.name // Undefined