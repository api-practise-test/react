import React from 'react';

export default function ProductCard(props) {
    return(
        <div onClick={props.onClick}>
            <span>{props.phone}</span>
            <span>{props.description}</span>
            <span>{props.price}</span>
            <span>{props.brand}</span>
            <img src={props.image} alt=""/>
        </div>
    )
}