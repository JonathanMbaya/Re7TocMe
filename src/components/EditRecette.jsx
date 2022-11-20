import React, { Component } from 'react';
import Header from './Header/Header';
import EditForm from "./Formulaires/EditForm"

function EditRecette() {

    return (
        <div>
          <Header/>
          <h2 className='container'>Modifier la recette</h2>
          <EditForm/>
        </div>
    );
  }

export default EditRecette;