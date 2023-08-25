import React from "react";

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

function pageHome() {
    return(
        <Container>
            <Header>
                <img src={Logo} alt="Logo Burguer" />
                <H1>Faça seu pedido!</H1>
            </Header>
            <Main>
                <LabelInputs>
                    <LabelCadastro>Pedido</LabelCadastro>
                    <InputCadastro placeholder="1 Coca-Cola, 1-X Salada" />
                </LabelInputs>
                <LabelInputs>
                    <LabelCadastro>Nome do Cliente</LabelCadastro>
                    <InputCadastro placeholder="Steve Jobs" />
                </LabelInputs>
            </Main>
            <BoxButton>
                <Button>Novo Pedido</Button>
            </BoxButton>
        </Container>
    );
}

export default pageHome;