import React from "react";
import { Link, useParams } from "react-router-dom";

const Contact = () => {
    
    return(
        <div>
            <div>Contact Page</div>
            <Link to="/contact/1">Contact 1</Link>
            <Link to="/contact/2">Contact 2</Link>

        </div>
    );
}
export default Contact;