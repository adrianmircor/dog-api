import React from 'react';
import Letra from './Letra';


const LayoutAlfabeto = () => {

    let arrayLetras = [
        'a','b','c','d','e','f','g','h','i',
        'j','k','l','m','n','o','p','q','r',
        's','t','u','v','w','x','y','z'
    ];

    return(
        <div>
            {arrayLetras.map( (letra,i ) => {
                return <Letra key={i} letra={letra}></Letra>
            })}
        </div>
    )
}

export default LayoutAlfabeto;