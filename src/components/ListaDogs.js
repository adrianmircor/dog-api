import React, { useContext, useEffect, useState } from "react";
import Dog from "./Dog";
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
const H4 = styled.h4`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const H2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const ContenedorBotones = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  font-size: 2rem;
`;

const Span = styled.span`
  text-transform: uppercase;
`;

const ListaDogs = () => {
  const { letrainicial } = useContext(dogContext);

  const [filtrarListaDogs, setFiltrarListaDogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    callApi();
    //SE EEJECUTA 2 VECES, LA 1RA ENSEGUIDA DE CREAR EL COMPONENTE
    //LA 2DA CUANDO CAMBIA EL VALOR DE filtarListaDogs
    /*   console.log("use") 
    } */
  }, []);

  const callApi = async () => {
    console.log("x.x");
    let razas, razasSegunLetra;

    await axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        razas = Object.keys(res.data.message);

        razasSegunLetra = filtrarSegunLetra(razas);

        setLoading(true); //ejecutar useEffect 4 6
        setFiltrarListaDogs(razasSegunLetra); //ejecutar useEffect 4 6
      })
      .catch((error) => {
        console.log(error);
      });

    return;
  };

  console.log("callApi fuera >", filtrarListaDogs);

  const filtrarSegunLetra = (lista) => {
    let nuevalista = lista.filter((dog) => {
      if (dog.slice(0, 1) === letrainicial) {
        console.log(".x.x.", dog.slice(0, 1));
        return dog;
      }
      return null;
    });

    return nuevalista;
  };

  return (
    <Contenedor>
      <H2>
        Razas de perros que inician con: <Span> {letrainicial}</Span>
      </H2>

      {loading === true ? (
        filtrarListaDogs.length === 0 ? (
          <H4>No se encontraron resultados con esa inicial :( </H4>
        ) : (
          <ContenedorBotones>
            {filtrarListaDogs.map((perro, i) => (
              <Dog key={i} perro={perro}></Dog>
            ))}
            {/* <button
          onClick={callApi}>X</button> */}
          </ContenedorBotones>
        )
      ) : (
        <H4>Cargando... : </H4>
      )}
    </Contenedor>
  );
};

export default ListaDogs;
