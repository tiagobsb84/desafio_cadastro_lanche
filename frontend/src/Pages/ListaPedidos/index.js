import React, {useState, useEffect} from "react";
import axios from "axios";

import LogoLista from "../../assets/logo-lista.png";
import Lixeira from "../../assets/lixeira.svg";

import { 
    Container,
    Header,
    H1,
    Main,
    Paragrafo,
    IconeLixeira,
    BoxButton,
    Button 
} from "./style";

//Listando pedidos
const ListaPedidos = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function listaPedidos() {
            const {data: listaPedido} = await axios.get('http://localhost:3001/pedidos');
            
            setUsers(listaPedido);
        }

        listaPedidos();
    },[]);

    //Deletando pedido
    async function deletandoPedido(userId) {
        await axios.delete(`http://localhost:3001/pedidos/${userId}`);
        const deletandoUser = users.filter(use => use.id !== userId);

        setUsers(deletandoUser);
    }

    return(
        <Container>
            <Header>
                <img src={LogoLista} alt="Logo Burguer" />
                <H1>Pedidos</H1>
            </Header>
            <Main>
                <ul>
                    {users.map((use) => (
                        <li key={use.id}>
                            <Paragrafo>{use.nome} {use.pedido} <IconeLixeira onClick={() => deletandoPedido(use.id)} src={Lixeira} alt="icone lixeira" /></Paragrafo>
                        </li>
                    ))}
                </ul>
            </Main>
            <BoxButton>
                <Button>Novo Pedido</Button>
            </BoxButton>
        </Container>
    )
}

export default ListaPedidos;