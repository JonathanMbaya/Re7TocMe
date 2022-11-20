import React from 'react';
import "./TheRecette.css";
import { Link } from 'react-router-dom';

function TheRecette ({id, titre, index, duree, ingredients, nbrPersonnes,img, niveau, description, etapes}) {
    return (


        // Template de la page qui affiche une seule recette

        <div key={index} id={id} className="container  .card-recette-recette col-md-12">



            {/* Image de la recette */}
            <div class="container-more">
                <div class="image-zoom-recette center">
                    <img className="img-Recette image-zoom img-fluid" src={img}/>
                </div>
            </div>



            {/* Titre de la recette */}

                
            <div className="result-titre titre-therecette">
                <h3>{titre}</h3>
            </div>


            {/* Tous les détails sur la recette */}

                <div className="allresult">

                        <div className="details-result">
                            <h4>Durée</h4>
                            <p><i className="fa-solid fa-stopwatch"></i>{duree} min</p>      
                        </div>

                        <div className="details-result">
                            <h4>Nombre de personnes</h4>
                            <p><i className="fa-solid fa-person"></i>{nbrPersonnes}</p>
                        </div>

                        <div className="details-result">
                            <h4>Niveau de difficulté</h4>
                            <p><i className="fa-solid fa-jedi"></i>{niveau}</p>
                            
                        </div>

                </div>

                <div>
                    <div className="container-fluid col-6">
                        <div className="container-fluid">
                            <h3 className="titre-therecette">Description</h3>
                            <p className="titre-therecette">{description}</p>
                        </div>

                        <div className="container-fluid">
                            <h3 className="titre-therecette">Ingrédients</h3>

                            <p className="titre-therecette">{ingredients}</p>
                        </div>

                        <div className="container-fluid">
                            <h3 className="titre-therecette">Les étapes à suivre</h3>
                            <p className="titre-therecette">{etapes}</p>
                        </div>
                    </div>

                </div>



                <div className="btnsTheRecette col-12">

                    {/* Button vers la page de modification de la recette */}
                    <Link to={'modifier-la recette'} className="nav-link">
                        <button className='btn-btn btn-btn-edit'>
                            <i className="fa-solid fa-pencil"></i> Modifier
                        </button>
                    </Link>

                    {/* Button qui affiche le PopUp pour confirmer la supression */}
                    <button className='btn-btn btn-btn-delete'> <i className="fa-solid fa-trash"></i> Supprimer</button>

                </div>



        </div>
    )
}

export default TheRecette;