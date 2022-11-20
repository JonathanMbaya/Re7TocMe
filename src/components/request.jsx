import axios from 'axios';

const API_URL = `http://127.0.0.1:5173/src/data/recipes.json`;


export async function getRecettes (){
    try{
        const {data} = await axios.get(`${API_URL}`);
        console.log(data);
        return data;

    } catch (error) {
        console.log(error);
    }
}


export async function getRecetteById (id){
    try{
        const {data} = await axios.get(`${API_URL}`);
        const recette = data.find(({ id }) => id === id);
        console.log(recette);
        return recette;

    } catch (error) {
        console.log(error);
    }
}