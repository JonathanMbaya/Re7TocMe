import React from "react";
import {Link } from 'react-router-dom';
import "./Content.css";
import axios from 'axios';

class Recette extends React.Component{

    state = {
        recettes: []
      }
    
      componentDidMount() {
        axios.get(`http://127.0.0.1:5173/src/data/recipes.json`)
          .then(res => {
            const recettes = res.data;
            this.setState({ recettes });
          })
      }

    render (){
        return (

            <div className="section-result">
    
                <h2>Nos recettes</h2>

                <i className="fa-solid fa-filter"></i>

                    { this.state.recettes.map(recettes => 

                    <Link to={`recette`} className="nav-link">
                        <div key={recettes.id} className="card-recette allresult col-md-12">

                            <img className="img-Recette img-fluid" src={recettes.photo} alt="photo de la recette" />

                            <div>
                                <div className="result-titre">
                                    <h3><i className="fa-solid fa-utensils"></i>{recettes.titre}</h3>
                                </div>

                                <div className="allresult">

                                    <div className="details-result">
                                        <h4>Durée</h4>
                                        <p><i className="fa-solid fa-stopwatch"></i>{recettes.tempsPreparation} min</p>
                                        
                                    </div>

                                    <div className="details-result">
                                        <h4>Nombre de personnes</h4>
                                        <p><i className="fa-solid fa-person"></i>{recettes.personnes}</p>
                                    </div>

                                    <div className="details-result">
                                        <h4>Niveau de difficulté</h4>
                                        <p><i className="fa-solid fa-jedi"></i>{recettes.niveau}</p>
                                        
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

                    
                    
                    )}

            </div>

        )

    }
                    
}
            


export default Recette;



