import React from "react";
import { useParams } from "react-router-dom";

const NewContact = () => {
     const { id } = useParams();
    return(
        <div>
            <h1>Contact {id}</h1>
        </div>
    )
}

export default NewContact