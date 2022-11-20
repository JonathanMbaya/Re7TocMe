import React from 'react';
import Header from './Header/Header';
import AddForm from './Formulaires/AddForm';

function AddRecette (){

    return (
        <div>
          <Header/>
          <h2 className='container'>Ajouter une recette</h2>
          <AddForm/>
          
        </div>
    );
  }


export default AddRecette;