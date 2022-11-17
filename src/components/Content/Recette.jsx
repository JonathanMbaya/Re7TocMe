import "./Recette.css";
import recipe from "../../assets/photos/chocolate-lava-cake.jpg";

function Recette(){


  return (

<div className="section-result col-12">

  <div className="card-recette col-md-4 col-sm-6 col-12">

    <img className="img-Recette img-fluid" src={recipe} alt="recipe" />


    <div className="details">

      <div className="details-title">
            
        <div>
          <h3>{recettes.titre}</h3>
        </div>

        </div>

        <div className="details-others">

            <div>
                <h4>Durée</h4>
                <h4>{recettes.tempsPreparation} min</h4>
            </div>

            <div>
                <h4>Nombre de personnes</h4>
                <h4>{recettes.personnes}</h4>
                
            </div>

            <div>
                <h4>Niveau de difficulté</h4>
                <h4>{recettes.niveau}</h4>
            </div>

        </div>

    </div>
  </div>

</div>






  )

}

export default Recette;