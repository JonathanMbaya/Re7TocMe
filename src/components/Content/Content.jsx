import React, {Component} from "react";
import "./Content.css";




class Content extends Component{

    state={
        post:{}
    }

    componentDidMount(){

        fetch ("http://127.0.0.1:5173/src/data/recipes.json")
            .then ((response) => {
                return response.json()
            })

            .then((result)=>{
                console.log(result)
                this.setState({post:result})
            })

            .catch((err)=>console.log(err));

    }

    render (){
        return (

            <div className="section-result">
    
                <h2>Nos recettes</h2>


            </div>
    
        );
    }

    }



export default Content;



