import React, { useContext, useState, useEffect } from "react";
import dogContext from "../context/dogContext";
import axios from "axios";
import styled from "styled-components";

const Contenedor = styled.div`
  display: grid;

  min-height: 100vh;
  margin: 0 auto;
  max-width: 600px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 4fr;
`;
const H2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
const Span = styled.span`
  text-transform: uppercase;
`;
const Imagen = styled.img`
  max-width: 400px;
  max-height: 400px;
`;
const ContenedorImagen = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const H4 = styled.h4`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ImagenDog = () => {
  const { nombre } = useContext(dogContext);

  const [imagenDog, setImagenDog] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios
      .get(`https://dog.ceo/api/breed/${nombre}/images/random`)
      .then((res) => {
        console.log("url:", res);
        console.log("url imagen:", res.data.message);
        setLoading(true);
        setImagenDog(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Contenedor>
      <H2>
        Imagen de: <Span>{nombre}</Span>
      </H2>
      {loading ? (
        <ContenedorImagen>
          <Imagen src={imagenDog} />
        </ContenedorImagen>
      ) : (
        <H4>Cargando... </H4>
      )}
    </Contenedor>
  );
};

export default ImagenDog;
