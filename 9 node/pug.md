# Criação de Templates com Pug 

- Template implementado com JS para Node.js e Browsers
- Pode ser integrado com Express
- Tem uma syntax diferente do HTML padrão, sendo mais parecida com JS

# Prós e Contras 

+ Escreve mais HTML com menos código
+ Código parecido com paragráfos, o que dá mais legibilidade 
+ Não há fechamento de tags, apenas indentação para identificar alinhamento
de tags
+ É possível escrever JavaScript dentro do template Pug

- Espaçõs em branco importam, um mínimo erro de indentação pode trazer problemas
- Não é possível usar código HTML  de qualquer lugar, é preciso converter para Pug
antes de usar 

# Exemplo prático com Pug 

// É possível usar variáveis 
const name = 'Gisele' 

doctype html 
    head
        meta(charset='utf-8')
    
        style.
            .footer {
                background-color: red;
            }
    body(class="flex")  // Dois métodos de adicionar classe 
        header.d-flex  
            nav.navbar 
                a.navbar-brand 

        main.flex 
            h1 #{name}
        include footer // inclui templates externos

- É necessário fazer build, que criará uma pasta com o HTML gerado

# Integrando Pug com Express 

- Em tempo de execução, variáveis dentro do template podem ser substituidas
por valores reais
- Transforma o template em HTML e manda para o cliente
- Desenvolvimento de páginas HTML dinâmicas usando conteúdo estático

# Exemplo Prático 

- Algumas configurações devem ser adicionadas no arquivo index.js 

app.set('views', './src/templates) // Informa diretório dos templates
app.set('view engine', 'pug') // Informa que o Pug será usado como view engine para compilar estes arquivos

app.get('/', (req, res) => {
    // Renderiza o template index

    res.render('index', {
        message: 'Pug com Express' // Substitui a variável message do template com este valor
    })
})