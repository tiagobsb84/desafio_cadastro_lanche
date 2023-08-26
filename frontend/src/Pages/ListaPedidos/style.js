import styled from "styled-components";

export const Container = styled.div`
    background: #0A0A10;

    min-height: 100vh;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        padding: 0.69rem 2.25rem 1.55rem;
    }
`;

export const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 2.64rem;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LabelInputs = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 2.65rem;
`;

export const LabelCadastro = styled.label`
    color: #EEE;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.375rem; /* 122.222% */
    letter-spacing: -0.0255rem;

    margin-left: 1rem;
`;

export const InputCadastro = styled.input`
    border-radius: 0.875rem;
    background: rgba(255, 255, 255, 0.25);

    display: flex;
    padding: 1.1875rem 8.6875rem 1.125rem 0.9375rem;
    align-items: center;

    color: #FFF;
    font-size: 1.125rem;
    font-weight: 300;
`;

export const BoxButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 4.65rem;
    padding-bottom: 3.1rem;
`;

export const Button = styled.button`
    background: #D93856;

    width: 21.375rem;
    height: 4.25rem;
    padding: 0rem 7.0625rem;

    color: #FFF;
    text-align: center;
    font-size: 1.0625rem;
    font-weight: 900;
    line-height: 0.15625rem; /* 14.706% */
    border: none;

    cursor: pointer;

    &:hover {
        opacity: .8;
    }

    &:active {
        opacity: .5;
    }
`;

export const Paragrafo = styled.p`
    color: white;
`;

export const IconeLixeira = styled.img`
    background: white;
    cursor: pointer;
`;