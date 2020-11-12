import React, {useContext} from "react";

import { Link } from "react-router-dom";
import dogContext from "../../context/dogContext";

const Letra = ({ letra }) => {

  const {
    capturarLetraInicial
  } = useContext(dogContext);


  const handleLink = (letrita) => {
    console.log(letrita);
    capturarLetraInicial(letrita);
    
  };

  return (
    <>
      <Link to="/lista" onClick={() => handleLink(letra)}>
        {letra}
      </Link>
      <br />
    </>
  );
};

export default Letra;
