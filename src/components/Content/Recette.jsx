function Recette(){


  return (

    <div className="section-result">
    
    <h2><i class="fa-solid fa-bowl-rice"></i>Nos recettes</h2>

    <i class="fa-solid fa-filter"></i>

        { this.state.recettes.map(recettes => 

        <div className="card-recette allresult col-md-12">

            <img className="img-Recette img-fluid" src={recettes.photo} alt="photo de la recette" />

            <div>
                <div className="result-titre">
                    <h3><i class="fa-solid fa-utensils"></i>{recettes.titre}</h3>
                </div>

                <div className="allresult">

                    <div className="details-result">
                        <h4>Durée</h4>
                        <p><i class="fa-solid fa-stopwatch"></i>{recettes.tempsPreparation} min</p>
                        
                    </div>

                    <div className="details-result">
                        <h4>Nombre de personnes</h4>
                        <p><i class="fa-solid fa-person"></i>{recettes.personnes}</p>
                    </div>

                    <div className="details-result">
                        <h4>Niveau de difficulté</h4>
                        <p><i class="fa-solid fa-jedi"></i>{recettes.niveau}</p>
                        
                    </div>

                </div>

                <button><i class="fa-solid fa-pencil"></i> Modifier</button>
                <button> <i class="fa-solid fa-trash"></i> Supprimer</button>
            </div>

        </div>

        
        
        )}

</div>






  )

}

export default Recette;