import React, { useContext, useEffect, useState } from "react";
import Dog from "./Dog";
import dogContext from "../../context/dogContext";
import axios from "axios";

const ListaDogs = () => {
  const { letrainicial } = useContext(dogContext);

  const [listaDogs, setListaDogs] = useState([]);
  const [filtrarListaDogs, setFiltrarListaDogs] = useState([]);
  const [bandera, setBandera] = useState(false);

  useEffect(() => {
    //Si no tiene nada filtrarListaDogs, llama a callApi()
    if (!bandera) {//¿POR QUE?
      
      callApi();
    }
    console.log("NO LLAMA A NADIE");
  }, [filtrarListaDogs]); //c/vez q se modifica filtrarListaDogs

  console.log("HOLA");

  const callApi = () => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        /* console.log("res", res);
        console.log("res.data", res.data);
        console.log("res.data.message: ", res.data.message); */

        let razas = Object.keys(res.data.message);
        /* console.log(razas); */

        /* setListaDogs([{ nombre: "beto" }, { nombre: "beto2" }]); */
        setListaDogs(razas);

        //Filtrar razas segun letra
        setFiltrarListaDogs(filtrarSegunLetra(listaDogs));
        //setListaDogs(filtrarListaDogs);

        setBandera(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* console.log("AQUII->>>>", listaDogs);
  console.log("FILTADA->>>", filtrarListaDogs); */

  const filtrarSegunLetra = (lista) => {
    let nuevalista = lista.filter((dog) => {
      console.log("MALCA: ", dog.slice(0, 1));
      if (dog.slice(0, 1) === letrainicial) {
        console.log(".x.x.", dog.slice(0, 1));
        return dog;
      }
      return null;
    });

    return nuevalista;
  };


  return (
    <div>
      <div>
        {filtrarListaDogs.map((perro, i) => (
          <Dog key={i} perro={perro}></Dog>
        ))}
        {/* <button
                onClick={callApi}>X</button> */}
      </div>
    </div>
  );
};

export default ListaDogs;
