# Renderização Condicional 

- Em React é possível renderizar apenas alguns elementos dependendo
do estado da aplicação.

Exemplo Operator Condicional) 

const hasCustomer = true 

{hasCustomer && (elemento)}

Acima, se existir um customer o elemento será apresentado. Se for false, não aparecerá.

Exemplo Ternário)

{hasCustomer ? : (elemento) : (outro elemento)}

Acima, se existir um customer ele será mostrado, se não existir aparecerá outro elemento, como
cadastrar cliente, por exemplo.

É mais apropriado que os elementos sejam componentes fora do return e que 
então sejam chamados dentro dele.

*

# Listas e Chaves 
Exemplo com Listas:

const customersList = [
    {
        id: 1,
        name: 'test',
    },
    {
        id: 2,
        name: 'test 2',
    },
    {
        id: 3,
        name: 'test 3',
    }
]

Com uma arrow function é possível renderizar todos os costumers;

// index = posição do array
const renderCustomers = (customer, index) => {
    return (
        <li key={index}>{customer.name}</li>
    )
}

#Chaves: As chaves ajudam o React a identificar quais itens sofreram alterações, foram adicionados ou removidos.

Porém essa forma não é muito apropriada no caso de usar em outras listagens. Para evitar
essa repetição, ao invés de usar index usar o id do customer com um nome como 'customer-id'.

// Pode ser map, reduce, filter, etc.
{customersList.map(renderCustomers)}

Assim todos os nomes serão renderizados. 

*

# Manipulando Eventos em React

- São nomeados usando camelCase ao invés de letras minusculas.
- Com o JSX você passa uma função como manipulador de eventos, não texto.

Então, ao invés de:

onClick=showEvent

Será:

onClick={() => showEvent}

ou 

onClick={showEvent}

* 

# Dicas para usar o React

- Comece com um mock
- Separe a UI em uma hierarquia de elementos (exemplo: botão, card, etc.).
- Colocar esses componentes numa pasta separada (components).
- Cada componente deve ter uma responsabilidade única, busque deixa-los isolados.
- Identifique onde o state deve ficar.

