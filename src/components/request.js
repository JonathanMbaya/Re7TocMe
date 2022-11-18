import axios from "axios";

const API_URL = "../data/recipes.json";


export async function getRecettes (){
    try{
        const {data} = await axios.get(`${API_URL}recettes`);
        return data;
    } catch (error) {
        console.log(error);
    }
}



export async function getRecetteById (id){
    try{
        const {data} = await axios.get(`${API_URL}recettes/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}