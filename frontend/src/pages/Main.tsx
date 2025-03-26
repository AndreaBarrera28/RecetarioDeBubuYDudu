
import { useEffect, useState } from "react";
import APIClient from "../services/apiClient";

export default function HolaMundo() {

    const [message,setMessage] = useState('');

    const [ingredients,setIngredients] = useState([]);

    useEffect(() =>{
        const test = new APIClient('test-connection');
        test.fetch()
            .then(response =>{
                setMessage(response.data.message)
                //console.log("conexion cpn back:", Response.data.message);
            })
            .catch(error => {
                console.error("error al conectar ", error);
            });

        const ingredientsClient = new APIClient('ingredients');
        ingredientsClient.fetch()
            .then(response =>{
                setIngredients(response.data.data)
            })
            .catch(error => {
                console.error("error al obtener ingredeintes ", error);
            });
    }, []);

    return(
        <div>
            <h1>hola</h1>
            {message}
            <ul>
                {ingredients.map((ingredient: {id:number,name:string})=>(
                    <li key={ingredient.id}>
                        {ingredient.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
