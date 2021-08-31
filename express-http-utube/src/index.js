const { response } = require('express');
const { request } = require('http');

const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const clients = [
    {id: 2, nome: 'Luan dos Santos', telefone: '53984551235'},
    {id: 1, nome: 'Yasmin dos Santos', telefone: '53984551237'},
    {id: 3, nome: 'Pedro Elias dos Santos', telefone: '53984551238'},
    {id: 4, nome: 'Luana dos Santos', telefone: '53984551239'},
]

// retorna todos os clientes json
app.get('/clients', (request, response) => response.json(clients))

// buscar um unico recurso
app.get('/clients/:id', (request, response) => {
    const client = clients.filter(value => value.id == request.params.id);
    response.json(client);  
})

// Inserir dados no servidor - BD
app.post('/clients', (request, response) => {
    const client = request.body;
    clients.push(client);
    response.json(client);
    
})

// Atualizar nome de clientes
app.put('/clients/:id', (request, responde) => {
    const id = request.params.id;
    const nome = request.body.nome;

    let client = clients.filter(value => value.id == id);

    client[0].nome = nome;

    response.json(client[0]);
})

app.delete('clients/:id', (request, response) =>{
    const id = request.params.id;
    clients.filter(value => value.id != id)

    response.json(clients);
})

app.listen(3000);