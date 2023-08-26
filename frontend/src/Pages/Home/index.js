import React, { useState, useRef } from "react";
import axios from 'axios';

import { 
    Container,
    Header,
    H1,
    Main,
    LabelInputs,
    LabelCadastro,
    InputCadastro,
    Button,
    BoxButton,
    Paragrafo,
    IconeLixeira
} from "./style";

import Logo from "../../assets/Logo-Burguer.png";
import Lixeira from "../../assets/lixeira.svg";

const App = () => {
    const [users, setUsers] = useState([]);
    const inputNome = useRef();
    const inputPedido = useRef();

    async function addNewPedido() {
        const {data: newUsers} = await axios.post('http://localhost:3001/pedidos', {
            nome: inputNome.current.value,
            pedido: inputPedido.current.value
        })

        console.log(newUsers);

        setUsers([...users, newUsers]);
    }

    function deletandoPedido(userId) {
        const deletandoUser = users.filter(use => use.id !== userId);

        setUsers(deletandoUser);
    }

    return(
        <Container>
            <Header>
                <img src={Logo} alt="Logo Burguer" />
                <H1>Faça seu pedido!</H1>
            </Header>
            <Main>
                <LabelInputs>
                    <LabelCadastro>Pedido</LabelCadastro>
                    <InputCadastro ref={inputPedido} placeholder="1 Coca-Cola, 1-X Salada" />
                </LabelInputs>
                <LabelInputs>
                    <LabelCadastro>Nome do Cliente</LabelCadastro>
                    <InputCadastro ref={inputNome} placeholder="Steve Jobs" />
                </LabelInputs>
            </Main>
            <BoxButton>
                <Button onClick={addNewPedido}>Novo Pedido</Button>
            </BoxButton>
            <ul>
                {users.map((use) => (
                    <li key={use.id}>
                        <Paragrafo>{use.nome} {use.pedido} <IconeLixeira onClick={() => deletandoPedido(use.id)} src={Lixeira} alt="icone lixeira" /></Paragrafo>
                    </li>
                ))}
            </ul>
            
        </Container>
    );
}

export default App;