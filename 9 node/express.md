# Express 

- Framework web desenvolvido para criar API's estáveis de forma mais fácil.
- Minimalista e rápida para node.js
- Utilitários HTTP 

Usando o Express num projeto node

const express = require('express')
const app = express() 
const port = 3000

// Endpoint: '/'  Método: GET 
// Req: Dados da requisição, res: Resposta da requisição
app.get('/', (req, res) => res.send("Ola mundo pelo express!")))

// Porta + Callback 
app.listen(port, () => console.log("API rodando na porta 3000!"))

# Criando Rotas 
- Crie uma pasta chamada routes da qual cada rota será criada de acordo com sua
funcionalidade.
- Importe essas rotas no arquivo index.js 

Exemplo de criação de rota: 

// Criar um arquivo com nova rota 
// Acesso ao file system para armazenamento 
const fs = require('fs')
const { join } = require('path')

const filePath = join(__dirname, 'users.json')

const getUsers = () => {
    const data = fs.existsSync(filePath) // Verifica se o arquivo existe
    ? fs.readFileSync(FilePath) // Lê o arquivo 
    : [] 

    try{
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringfy(users, null, '\t'))

const userRoute = (app) => {
    app.route('/users/:id?')
    .get((req, res) => {
        const users = getUsers()
        res.send({ users })
    })
} 

module.exports = userRoutes 

Agora essa rota já pode ser usada no index.js 

# Body Parser 

- Transformar os dados que vem no cabeçalho da requisição HTTP para ser usado.

const bodyParser = require('body-parser')

// Informa pro node que vamos usar um middleware
app.use(bodyParser.urlencoded( {extended: false} ))

