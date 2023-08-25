import React from "react";

import { 
    Container,
    Header,
    H1,
    Main,
    LabelInputs,
    LabelCadastro,
    InputCadastro,
    Button
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
                    <InputCadastro />
                </LabelInputs>
                <LabelInputs>
                    <LabelCadastro>Nome do Cliente</LabelCadastro>
                    <InputCadastro />
                </LabelInputs>
            </Main>
            <Button>Novo Pedido</Button>
        </Container>
    );
}

export default pageHome;