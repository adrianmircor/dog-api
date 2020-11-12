import React, { useReducer } from "react";
import dogContext from "./dogContext";
import dogReducer from "./dogReducer";
//import axios from "axios";

import {
    INICIAL_DOG,
    NOMBRE_DOG,
} from "../types/index.js";

const DogState = (props) => {

  const initialState = {
    letrainicial: '',
    nombre: ''
  };

  //useReducer
  const [state, dispatch] = useReducer(dogReducer, initialState);

  //Funciones
  const capturarLetraInicial = (letraInicial) => {

    dispatch({
        type: INICIAL_DOG,
        payload: letraInicial,
      });

  }

  const capturarNombre = (nombre) => {

    dispatch({
        type: NOMBRE_DOG,
        payload: nombre,
      });
      
  }
  
  return (
    <dogContext.Provider
      value={{
        letrainicial: state.letrainicial,
        nombre: state.nombre,
        capturarLetraInicial,
        capturarNombre
      }}
    >
      {props.children}
    </dogContext.Provider>
  );
};

export default DogState;