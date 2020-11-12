import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import LayoutAlfabeto from './components/layouts/LayoutAlfabeto'
import ListaDogs from './components/layouts/ListaDogs'
import ImagenDog from './components/layouts/ImagenDog'

import DogState from './context/dogState' 


function App() {
  return (

    <BrowserRouter>
    
      <DogState>
        <Route exact path="/" component={LayoutAlfabeto}/>
        <Route exact path="/lista" component={ListaDogs}/>
        <Route exact path="/imagen" component={ImagenDog}/>
      </DogState>

    </BrowserRouter>
  );
}

export default App;
