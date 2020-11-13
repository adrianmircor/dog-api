import React, {useContext} from "react";
import { Link, Redirect } from "react-router-dom";
import dogContext from "../../context/dogContext";

const SubRazaDog = ({ perro }) => {

  const { capturarNombre } = useContext(dogContext);

  const seleccionarNombre = (e) => {

    //capturarNombre(perro)
    //Captura sub raza(perro)
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

export default SubRazaDog;
