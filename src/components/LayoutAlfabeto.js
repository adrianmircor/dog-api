import React from 'react';
import Letra from './Letra';
import styled from 'styled-components';


const Contenedor = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(4, 1fr);

    margin: 0 auto;
    max-width: 600px;
`;

const H1 = styled.h1`
    display: flex;
    grid-column: 1 / 10;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
`;

const LayoutAlfabeto = () => {

    

    let arrayLetras = [
        'a','b','c','d','e','f','g','h','i',
        'j','k','l','m','n','o','p','q','r',
        's','t','u','v','w','x','y','z'
    ];

    return(
        <Contenedor>
            <H1>DOG-API</H1>
            {arrayLetras.map( (letra,i ) => {
                return <Letra key={i} letra={letra}></Letra>
            })}
        </Contenedor>
    )
}

export default LayoutAlfabeto;