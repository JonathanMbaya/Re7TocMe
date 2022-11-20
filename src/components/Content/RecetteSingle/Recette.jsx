import React, {useEffect,useState} from "react";
import { getRecettes } from "../../request";
import RecetteSingle from "./RecetteSingle";
import "./RecetteSingle.css"


function Recette () {

    // Stocker les données dans un tableau avec useState

    const [recettes, setRecettes] = useState ([]);

      // Fonction de chargement de la requête axios à chaque affichage de la page (useEffect) depuis le fichier request.jsx

    useEffect(() => {   
        async function getRecetteLoad(){
            const recettes = await getRecettes();
            setRecettes(recettes);
        }

        getRecetteLoad();

    }, []);




    return (

         // Affichage des données directement depuis le nouveau tableau recette

        <div className="section-result">
    
            <h2 className="container">Nos recettes</h2>

            <div className="container btn-filters">
                <div className="icon-filter">
                    <i className="fa-solid fa-filter"></i>
                </div>
                <button className="btn-filter-one">Par recette </button>
                <button  className="btn-filter-one">Par niveau</button>
                <button  className="btn-filter-one">Par personnes </button>
                <button  className="btn-filter-one">Par temps de prépartaion</button>
            </div>


            
            {recettes.map((recettes) => 


                <RecetteSingle 
                    
                id={recettes.id} 
                    
                key={recettes.id} 
                    
                img={recettes.photo} 
                    
                titre={recettes.titre} 
                    
                nbrPersonnes={recettes.personnes} 
                    
                niveau={recettes.niveau} 
                    
                duree={recettes.tempsPreparation}/>

            )}


        </div>

    )

}
                    
            
export default Recette;



