import React, { Component } from 'react';
import EditForm from './Content/Formulaires/EditForm';
import Header from './Header/Header';

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