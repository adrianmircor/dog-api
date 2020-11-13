import React, {useContext} from "react";
import { Link } from "react-router-dom";
import dogContext from "../context/dogContext";

const Dog = ({ perro }) => {

  const { capturarNombre } = useContext(dogContext);

  const seleccionarNombre = (e) => {

    capturarNombre(perro)
    console.log("========")

  }


  return (
    <>
      <Link to="/imagen">
        <button onClick={(e) => seleccionarNombre(e)}>
          {perro}
        </button>
      </Link>
      <br />
    </>
  );
};

export default Dog;
