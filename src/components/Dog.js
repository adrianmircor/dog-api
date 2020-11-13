import React, { useContext } from "react";
import { Link } from "react-router-dom";
import dogContext from "../context/dogContext";
import styled from "styled-components";

const Span = styled.span`
  text-transform: uppercase;
`;

const ContenedorBoton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Boton = styled.button`
  height: 2.6rem;
  border-radius: 8%;
  background-color: gainsboro;
  border: solid 2px;

`;

const Dog = ({ perro }) => {
  const { capturarNombre } = useContext(dogContext);

  const seleccionarNombre = (e) => {
    capturarNombre(perro);
  };

  return (
    <>
      <ContenedorBoton>
        <Link to="/imagen" style={{cursor: "default"}}>
          <Boton onClick={(e) => seleccionarNombre(e)}>
            <Span>{perro}</Span>
          </Boton>
        </Link>
      </ContenedorBoton>
    </>
  );
};

export default Dog;
