import React, { useContext, useEffect, useState } from "react";
import Dog from "./Dog";
import dogContext from "../context/dogContext";
import axios from "axios";

const ListaDogs = () => {
  const { letrainicial } = useContext(dogContext);

  const [filtrarListaDogs, setFiltrarListaDogs] = useState([]);

  useEffect(() => {
      

      callApi();
      //SE EEJECUTA 2 VECES, LA 1RA ENSEGUIDA DE CREAR EL COMPONENTE 
      //LA 2DA CUANDO CAMBIA EL VALOR DE filtarListaDogs
    /*   console.log("use") 
    } */

  }, []); 
  
  
  const callApi = async () => {
    console.log("x.x")
    let razas, razasSegunLetra;

      await axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((res) => {

        razas = Object.keys(res.data.message);

        razasSegunLetra = filtrarSegunLetra(razas);

        setFiltrarListaDogs(razasSegunLetra); //ejecutar useEffect 4 6
        
      })
      .catch((error) => {
        console.log(error);
      });

    return ;

   
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

  const agregarSubRazas = () => {

    console.log("xx:",filtrarListaDogs)

    if(filtrarListaDogs.length === 0){
      console.log("que fue")
      return ;
    }

    let extras = [];
    filtrarListaDogs.map((dog) => {

      //ir a la api https://dog.ceo/api/breed/${dog}/list
      axios
      .get(`https://dog.ceo/api/breed/${dog}/list`)
      .then((res) => {

        //agregar al array si tiene sub razas
        let subraza = res.data.message
        console.log("Sub razas",subraza)

        if(subraza.length === 0){
          return ;
        }
        extras.push(subraza);
        //Agregar las sub razas 
        filtrarListaDogs.push(subraza)
      })
      .catch((error) => {
        console.log(error);
      });
    });

    console.log("extras: ",extras)

  }

  
  return (
    <div>
      <p>Hola {letrainicial}</p>
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
