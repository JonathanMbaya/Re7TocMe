import React from "react";
import {Link } from 'react-router-dom';
import "./Header.css";


function Header() {

    return (
        <header>
            <div className="headertop">
                <div className="container-fluid">

                        <h1><Link to={'/'} className="nav-link"> <span className="color-yellow">Rec7</span> Tocme!</Link></h1>

                </div>

                <div>
                    <button>
                        <p><Link to={'/ajouter-une-recette'} className="nav-link">Ajouter une recette <i className="fa-solid fa-plus"></i></Link></p>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header



