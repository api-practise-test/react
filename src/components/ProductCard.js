import React from 'react';
import { Link } from 'react-router-dom';


export default function ProductCard(props) {
    return(
        <div>
            <span>{props.phone}</span>
            <span>{props.description}</span>
            <span>{props.price}</span>
            <span>{props.brand}</span>
            <img src={`http://localhost:8000/images/${props.image}`} alt=""/>
            <Link to={`/phone/updatePhone/${props.id}`}>Edit</Link>
            <button onClick={props.onClick}>Delete</button>
        </div>
    )
}