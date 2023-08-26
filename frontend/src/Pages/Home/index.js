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
    BoxButton
} from "./style";

import Logo from "../../assets/Logo-Burguer.png";

const App = () => {
    const [users, setUsers] = useState([]);
    const inputNome = useRef();
    const inputPedido = useRef();

    async function addNewPedido() {
        const {data: newUsers} = await axios.post('http://localhost:3001/pedidos', {
            nome: inputNome.current.value,
            pedido: inputPedido.current.value
        })

        setUsers([...users, newUsers]);
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
        </Container>
    );
}

export default App;