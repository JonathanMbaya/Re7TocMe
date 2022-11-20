import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header/Header';
import {getRecetteById} from "./request"
import TheRecette from './Content/TheRecette';

function Recettedetails () {


  const [recette, setRecette] = useState ([]);
  const {id} = useParams();

  useEffect(() => {
      async function getRecetteLoadById(id) {
          const recette = await getRecetteById (id);
          setRecette(recette);
      }
      getRecetteLoadById(id)

  }, [id]);

  return (

    <div>

      <Header/>

      <h2 className='container'>
        La Recette / {recette.titre}
      </h2>

        <TheRecette
          img={recette.photo} 
          
          titre={recette.titre}

          id={recette.id} 
              
          key={recette.id} 
                           
          nbrPersonnes={recette.personnes}

        ingredients= {recette.ingredients}
            
          niveau={recette.niveau} 
                      
          duree={recette.tempsPreparation}

          description={recette.description}

          etapes={recette.etapes}
          
        />

    </div>
  );
}


export default Recettedetails;