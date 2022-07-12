import React from 'react';
import { Link } from 'react-router-dom';
import '../asset/css/productCard.css'


export default function ProductCard({product, onClick}) {
    return(
        <div className="product__card">
            <img src={`http://localhost:8000/images/${product.image}`} alt=""/>
            <span className="phone__title">{product.phone}</span>
            <span className="phone__price">{product.price}</span>
            <span>{product.brand.brand}</span>
            <Link className="edit" to={`/phone/updatePhone/${product.id}`}>Edit</Link>
            <Link className="detail" to={`/phone/detailPage/${product.id}`}>Detail</Link>
            <button className="btn" onClick={onClick}>Delete</button>
        </div>
    )
}