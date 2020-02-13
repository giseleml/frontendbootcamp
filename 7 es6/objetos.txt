OBJETOS

const user = {
    name: 'Gerard',
    lastName: 'Way'
}

FUNÇÕES

Object.keys(user) ---> Retorna um array só com as chaves do objeto 



Object.values(user) ---> Retorna um array só com os valores do objeto



Object.entries(user) ---> Retorna um array de arrays dos quais contém: nome da propriedade, valor da propriedade
Output: 
0: (2) ["name", "Gerard"]
1: (2) ["lastName", "Way"]



            object   new object
Object.assign(user, {age: 42}) ---> Não recomendado pensando em imutabilidade, pois altera o objeto
principal adicionando novos keys/values. 
O que é recomendado: Passar um objeto vazio antes:


Object.assign({}, user, {age: 42}) ---> Constrói um objeto novo à partir do principal
Output: 
{name: "Gerard", lastName: "Way", age: 42, kids: 1}
Porém user permanece inalterado 
{name: "Gerard", lastName: "Way", age: 42}

Exemplo2 

const personalLife = Object.assign({}, user, {wife: "Lynz"}, {kids: 1})

Output:
personalLife = {name: "Gerard", lastName: "Way", age: 42, wife: "Lynz", kids: 1}
user = {name: "Gerard", lastName: "Way", age: 42}


const objeto = { foo: 'bar'}
Object.freeze(objeto) ---> Esse objeto não poderá mais ser alterado: criação/alteração/remoção de propriedades

const objeto = { foo: 'bar'}
Object.seal(objeto) ---> Não permite criar/deletar, mas permite alterar valor de uma propriedade já existente


