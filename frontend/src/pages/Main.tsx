import axios from "axios";
import { useEffect, useState } from "react";
import APIClient from "../services/apiClient";

export default function HolaMundo() {
   /* const [message, setMessage] = useState("");
    useEffect(() => {
        axios.get(`/api/test-connection`)

            .then(response => console.log("Mensaje del backend:", response.data.message))

            .catch(error => console.error("Error:", error));

    }, []);*/
    useEffect(() => {
        const client = new APIClient("test-connection");

        client.fetch()
          .then(response => console.log("Mensaje del backend:", response))
          .catch(error => console.error("Error:", error));
      }, []);
    return(

       <h1>hola</h1>

    )
}
