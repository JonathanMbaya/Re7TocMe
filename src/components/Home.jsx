import React, { Component } from 'react';
import AddForm from './Content/Formulaires/AddForm';
import Recette from './Content/RecetteSingle/Recette';
import Header from './Header/Header';

function Home () {

    return (
        <div>
            <Header/>
            <Recette/>
            <AddForm/>

        </div>


    );
  }



export default Home ;