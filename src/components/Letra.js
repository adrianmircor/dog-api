import React, { useContext } from "react";

import { Link } from "react-router-dom";
import dogContext from "../context/dogContext";

import styled from "styled-components";

const Span = styled.span`
  display: flex;
  font-size: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  justify-content: center;
  align-items: center;
`;

const Letra = ({ letra }) => {
  const { capturarLetraInicial } = useContext(dogContext);

  const handleLink = (letrita) => {
    capturarLetraInicial(letrita);
  };

  return (
    <>
      <div>
        <Link
          style={{ textDecoration: "none" , color: "black"}}
          to="/lista"
          onClick={() => handleLink(letra)}
        >
          <Span>{letra}</Span>
        </Link>
      </div>
    </>
  );
};

export default Letra;
