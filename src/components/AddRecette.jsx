import React from 'react';
import AddForm from './Content/Formulaires/AddForm';
import Header from './Header/Header';
AddForm


function AddRecette (){

    return (
        <div>
          {/* Affichage des composants de la page pour ajouter une nouvelle recette */}

          <Header/>
          <h2 className='container'>Ajouter une recette</h2>
          <AddForm/>
          
        </div>
    );
  }


export default AddRecette;