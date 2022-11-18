import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home"
import AddRecette from "./components/AddRecette";
import Recettedetails from "./components/RecetteDetails";
import EditRecette from "./components/EditRecette";



  function App () {
 
      return (
          <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='ajouter-une-recette' element={<AddRecette/>} />
                <Route path='modifier-la recette' element={<EditRecette/>} />
                <Route path='recette' element={<Recettedetails/>} />
            </Routes>
          </div>

      );

  }
  
  export default App;
