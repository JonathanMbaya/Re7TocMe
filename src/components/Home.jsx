import React, { Component } from 'react';
import AddForm from './Content/Formulaires/AddForm';
import Recette from './Content/RecetteSingle/Recette';
import Header from './Header/Header';

function Home () {

    return (
        <div>

            {/* Affichage des composants de la page d'Accueil */}
            <Header/>
            <Recette/>
            <AddForm/>

        </div>


    );
  }



export default Home ;