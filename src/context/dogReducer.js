import {
    INICIAL_DOG,
    NOMBRE_DOG
} from "../types/index";
  
  export default (state, action) => {
    switch (action.type) {
      case INICIAL_DOG:
        return {
          ...state,
          letrainicial: action.payload
        };
      case NOMBRE_DOG:
        //action.payload.idTarea es la 'tarea' q se envia y éste tiene como atributo idTarea
        return {
          ...state,
          nombre: action.payload
        };
      
      default:
        return state;
    }
  };