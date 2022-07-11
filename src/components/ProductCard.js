import React from 'react';
import { Link } from 'react-router-dom';
import '../asset/css/productCard.css'


export default function ProductCard({product, onClick}) {
    // console.log(props)
    return(
        <div className="product__card">
            <img src={`http://localhost:8000/images/${product.image}`} alt=""/>
            <span className="phone__title">{product.phone}</span>
            {/*<span>{product.description}</span>*/}
            <span className="phone__price">{product.price}</span>
            <span>{product.brand.brand}</span>
            <Link className="edit" to={`/phone/updatePhone/${product.id}`}>Edit</Link>
            <button className="btn" onClick={onClick}>Delete</button>
        </div>
    )
}