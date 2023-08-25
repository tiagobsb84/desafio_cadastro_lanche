const express = require('express');
const app = express();
const uuid = require('uuid');
const port = 3001;

app.use(express.json());

const listaPedidos = [];

app.get('/pedidos', (request, response) => {
    return response.json(listaPedidos);
})

app.listen(port, () => {
    console.log(`Porta: ${port}`);
});
