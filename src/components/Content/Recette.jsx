import React, {useEffect,useState} from "react";
import { getRecettes } from "../request";
import RecetteSingle from "./RecetteSingle";


function Recette () {

    const [recettes, setRecettes] = useState ([]);


    useEffect(() => {
        async function getRecetteLoad(){
            const recettes = await getRecettes();
            setRecettes(recettes);
        }

        getRecetteLoad();

    }, []);


        return (

            <div className="section-result">
    
                <h2>Nos recettes</h2>

                <i className="fa-solid fa-filter"></i>

                    {recettes.map((recettes, index) => 

                    <RecetteSingle 
                    
                    id={recettes.id} 
                    
                    key={index} 
                    
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



