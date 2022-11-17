import React from "react";
import "./Header.css";

function Header() {

    return (
        <header>
            <div className="headertop">
                <div className="container-fluid">
                    <a href="#">
                        <h1> <span className="color-yellow"><i className="fa-solid fa-utensils"></i>Rec7</span> | Tocme! </h1>
                    </a>
                </div>

                <div>
                    <button>
                        <p>Ajouter une recette <i className="fa-solid fa-plus"></i></p>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header



