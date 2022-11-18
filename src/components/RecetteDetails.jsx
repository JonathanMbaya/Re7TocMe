import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from './Header/Header';
import {getRecetteById} from "./request"

function Recettedetails () {

  const [recette, setRecette] = useState ({});
  const {id} = useParams();

  useEffect(() => {
      async function getRecetteLoadById(id){
          const recette = await getRecetteById (id);
          setRecette(recette);
      }

      getRecetteLoadById(id);

  }, []);


    return (
        <div>
          <Header/>
          <h2>Page d'ajout de recette</h2>
        </div>
    );
  }

export default Recettedetails;