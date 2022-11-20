import React from 'react';
import {Routes, Route, useParams } from 'react-router-dom';
import Home from "./components/Home"
import AddRecette from "./components/AddRecette";
import Recettedetails from "./components/RecetteDetails";
import EditRecette from "./components/EditRecette";


  function App () {
 
      return (
          <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path=':titre/:id' element={<Recettedetails/>} />
                <Route path='ajouter-une-recette' element={<AddRecette/>} />
                <Route path='modifier-la recette' element={<EditRecette/>} />
            </Routes>
          </div>

      );

  }
  
  export default App;
