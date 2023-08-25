const express = require('express');
const app = express();
const uuid = require('uuid');
const port = 3001;

app.use(express.json());

const listaPedidos = [];

//listando todos pedidos
app.get('/pedidos', (request, response) => {
    return response.json(listaPedidos);
})

//criando pedido
app.post('/pedidos', (request, response) => {
    const {nome, pedido} = request.body;
    const criarPedido = {id: uuid.v4(), nome, pedido};

    listaPedidos.push(criarPedido);

    return response.status(201).json(criarPedido);
})

//deletando pedido
app.delete('/pedidos/:id', (request, response) => {
    const {id} = request.params;
    const checkId = listaPedidos.findIndex(use => use.id === id);
    
    if(checkId < 0) {
        return response.status(404).json({error: 'Objeto não encontrado!'});
    }

    listaPedidos.splice(checkId, 1);

    return response.status(204).json();
})

app.listen(port);
