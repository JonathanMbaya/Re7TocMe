import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header/Header';
import {getRecetteById} from "./request"
import TheRecette from './Content/TheRecetteDisplay/TheRecette';

function Recettedetails () {

    // Stocker les données dans un tableau avec useState

  const [recette, setRecette] = useState ([]);

  // useParams pour récupérer l'Id de l'élément cliqué
  const {id} = useParams();


    // Fonction de chargement de la requête axios à chaque affichage de la page (useEffect) depuis le fichier request.jsx avec pour paramètre id

  useEffect(() => {
      async function getRecetteLoadById(id) {
          const recette = await getRecetteById (id);
          setRecette(recette);
      }
      getRecetteLoadById(id)

  }, [id]);

  return (


      // Affichage des données directement depuis le nouveau tableau recette
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