
import React, { Component } from 'react';

class AddForm extends Component {

    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }

    // Fonction qui capture les valeurs dans le tableau

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }
    // Fonction qui ajoute des nouveaux éléments au tableau
    addRecette(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    // Fonction qui supprime des éléments du tableau
    deleteRecette(item) {
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    // Renvoie les éléments du tableau pour les afficher
     renderRecette() {
        return this.state.items.map((item) => {
            return (
                <div className="list-group-item" key={item}>
                    {item} | <button onClick={this.deleteRecette.bind(this, item)}>X</button>
                </div>    
            );
        });
    }

    render() {
        return(

            // Template d'affichage
            <div>
                <h1 align="center">Ma Todo list</h1>
                <form className="form-row align-items-center">
                    <input 
                        aria-label='Nom de la recette'
                        value={this.state.userInput} 
                        type="text" 
                        placeholder="Nom de la recette"
                        onChange={this.onChange.bind(this)}
                        className="form-control mb-2"
                    />

                    <button 
                        onClick={this.addRecette.bind(this)} 
                        className="btn btn-primary"
                    >
                        Ajouter
                    </button>
                </form>
                <div className="list-group">
                    {this.renderRecette()}
                </div>
            </div>
        );
    }
}

export default AddForm