# Webpack
- Module Bundler, ou seja, um empacotador de módulos para aplicações JS.
- Gera um bundler (módulo) que será utilizado no HTML em ES5.

# Conceitos

- Entry: ponto de entrada do webpack, arquivo principal do qual
ele fará chamada de todos os outros módulos.
- Output: determina onde será exportado o módulo final.
- Loaders: permite que o Webpack gerencie outros arquivos que não são JS,
como imagens, CSS, HTML, fontes e muitos outros.
- Plugins: utilizado para otimização de pacotes, minificações,
injeção de scripts e muito mais.
- Mode: abordagem de configurações do zero. Pode configurar production, development
ou none. Por padrão é modo de  desenvolvimento. 

|_ Production: gera um arquivo final com otimizações internas para entrar 
em produção.

|_ Development: executa 3 plugins (uglify, moduleConcatenationPlugin e noEmitOnErrosPlugin).

# Configuração Webpack

1) Criar arquivo 'webpack.config.js' 
2) Instalar webpack npm i -D webpack webpack-cli
3) Alterar build para "build":"webpack --mode production" 
4) Instalar Babel

No arquivo webpack.config.js
- entry: arquivo principal a ser lido no projeto 
- output: por convenção é dist ou build 
- filename: nome do bundle (arquivo final) 

Em module é colocado quais os loaders e plugins que são utilizados e 
interpretados pelo webpack. 

Arquivo .babelrc 
- Arquivo padrão onde o Babel lê todos os presets e plugins dele. 


