# Tratamento de Erros

- Em JS, assim que um erro é encontrado o código é interrompido.
Para evitar essa interrupção deve tratar o erro com um bloco
try catch.
- Declaração Finally : Garantir e deixar explícito que um bloco de código será executado em caso de erro ou não.

# Debug 

- console.log() - retorna um texto preto
- console.warn() - fundo amarelo e ícone de exclamação
- console.error() - fundo vermelho e ícone de erro
- console.trace() - traz informações de onde o código foi executado 
- console.group() - agrupa vários console.log()
    console.log(1)
    console.log(2)
console.groupEnd()
- console.time() - tempo de execução da função
- console.table([]) - formata em forma de tabela para melhor visualização
- console.assert() - espera que uma condição seja verdadeira para executar o aviso no console

É possível estilizar o console log:
console.log('%c styled log', 'color: blue'; font-size: '40px';)

