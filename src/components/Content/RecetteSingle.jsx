import React from 'react';
import "./Content.css";
import { Link } from 'react-router-dom';

function RecetteSingle ({id, titre, duree, nbrPersonnes,img, index, niveau}) {
    return (
        <Link to={`recette/${id}`} className="nav-link">
                        <div key={index} id={id} className="card-recette allresult col-md-12">

                            <img className="img-Recette img-fluid" src={img}/>

                            <div>
                                <div className="result-titre">
                                    <h3><i className="fa-solid fa-utensils"></i>{titre}</h3>
                                </div>

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

                                <Link to={'modifier-la recette'} className="nav-link">
                                    <button>
                                        <i className="fa-solid fa-pencil"></i> Modifier
                                    </button>
                                </Link>

                                <button> <i className="fa-solid fa-trash"></i> Supprimer</button>
                            </div>

                        </div>
                    </Link>

    )
}

export default RecetteSingle;