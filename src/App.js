import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import LayoutAlfabeto from './components/LayoutAlfabeto'
import ListaDogs from './components/ListaDogs'
import ImagenDog from './components/ImagenDog'

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
