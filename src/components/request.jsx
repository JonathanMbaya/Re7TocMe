import React from 'react';
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
        const {data} = await axios.get(`${API_URL}/${id}`);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}