# React 

- Uma biblioteca JavaScript para criar interfaces de usuários, NÃO é um framework. 
- É baseado em componentes;
- É uma linguagem declarativa;
- Single Page Aplication (renderiza tudo uma vez, quando o usuário muda de rota não vai para outra página);

# História
- Foi criada em 2011 por um engenheiro do Facebook, baseado no XHP (framework para criação HTML no PHP).
- Em 2013 passou a ser open source.
- Em 2015 lançaram o React Native.

# Configuração 
- React Create App: biblioteca com configuração básica com servidor, webpack e Jest para utilizar na sua aplicação.
Utiliza a biblioteca React Scripts.
- A aplicação React é renderizada na id root no seu index.html 

# JSX 
- Linguagem de marcação para criar elementos HTML utilizando JS dentro dele. 
- Sua utilização não é obrigatória, mas facilita a criação de componentes.
- Não é interpretado pelo browser, precisa ser transpilado (Babel).

# Renderização
- O React não trabalha em cima do DOM do browser, mas sim de um Virtual DOM; Isso torna
as aplicações mais robustas e rápidas. Toda vez que tem um alteração HTML o React não altera tudo de novo,
mas sim apenas o que foi alterado na árvore de elementos.
- Elementos são as menores partes de um componente (strings, html, etc.)

# Componentes e Props 
- Componentes (menu, botões, etc.) que podem ser reutilizados, não sendo necessário
criar do zero para cada nova utilização.
- Podem ser Função e Classe (Na transpilação vira Protótipo).
- Props são propriedades passadas para um componente. 
