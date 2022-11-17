import React, {Component} from "react";
import "./Content.css";
import axios from 'axios';


class Content extends Component{

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

                    { this.state.recettes.map(recettes => 

                    <div className="col-md-12">

                        <img src={recettes.photo} alt="photo de la recette" />

                        <div>
                            <div className="result-titre">
                                <h3>{recettes.titre}</h3>
                            </div>

                            <div className="allresult">

                                <div className="details-result">
                                    <h4>Durée</h4>
                                    <p>{recettes.tempsPreparation} min</p>
                                </div>

                                <div className="details-result">
                                    <h4>Nombre de personnes</h4>
                                    <p>{recettes.personnes}</p>
                                </div>

                                <div className="details-result">
                                    <h4>Niveau de difficulté</h4>
                                    <p>{recettes.niveau}</p>
                                </div>

                            </div>
                        </div>

                    </div>

                    
                    
                    )}

            </div>

        )

    }
                    
}
            


export default Content;



