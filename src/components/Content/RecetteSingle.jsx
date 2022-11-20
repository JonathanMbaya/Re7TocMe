import React from 'react';
import "./RecetteSingle.css";
import { Link } from 'react-router-dom';

function RecetteSingle ({id, titre, duree, nbrPersonnes,img, niveau}) {

    return (
        
        <Link to={`${titre}/${id}`} className="nav-link">

            <div key={id} id={id} className="container card-recette allresult col-md-12">


                <div class="container">
                    <div class="image-zoom">
                        <img className="img-Recette image-zoom img-fluid" src={img}/>
                    </div>
                </div>

                <div className='col-md-6'>

                    <div className="result-titre">
                        <h3><i class="fa-solid fa-kitchen-set"></i>{titre}</h3>
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

                        </div>

                    </div>

                    <div className="btns col-12">

                        <button className='btn-btn btn-btn-edit'>     
                            <Link to={'modifier-la recette'} className="nav-link">
                                    <i className="fa-solid fa-pencil"></i> Modifier
                            </Link>
                        </button>




                        <Link to={'modifier-la recette'} className="nav-link">
                            <button className='btn-btn btn-btn-delete'> <i className="fa-solid fa-trash"></i> Supprimer</button>
                        </Link>

                    </div>




        </Link>

    )
}

export default RecetteSingle;