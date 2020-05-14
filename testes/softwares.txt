# Mocha
- Teste runner
- Descritivo
- Descreve qual funcionalidade, comportamento é esperado do componente.
- Pode testar Node e JavaScript no browser.

Por padrão busca arquivos num diretório "test"

É recomendado não utilizar arrow functions, pois sem acesso ao this não é
possível ter acesso a diversos controles nas funções.

# Funções

- describe("Descrição do que está sendo testado", function())
- it("descreve o comportamento esperado da classe")

Exemplo:

describe("Math class", function() {
    it('sum two numbers', function())
})

- only() foca na execução de um único teste.
- skip() ignora um teste pulando para o próximo

# Hooks 
Forma de executar código evitando repetição 

*

# Chai 
- Biblioteca de asserts mais descritivos, podendo ser usado junto com o Mocha.




