import React, { useContext, useState, useEffect } from "react";
import dogContext from "../../context/dogContext";

import axios from "axios";

const ImagenDog = () => {
  const { nombre } = useContext(dogContext);

  const [imagenDog, setImagenDog] = useState("");

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios
      .get(`https://dog.ceo/api/breed/${nombre}/images/random`)
      .then((res) => {
        console.log("url:", res);
        console.log("url imagen:", res.data.message);
        setImagenDog(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      FOTITO {nombre}
      <img src={imagenDog} />
    </div>
  );
};

export default ImagenDog;
