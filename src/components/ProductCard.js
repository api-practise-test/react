import React from 'react';
import { Link } from 'react-router-dom';
import '../asset/css/productCard.css'


export default function ProductCard({product, onClick}) {
    return(
        <Link className="detail" to={`/phone/detailPage/${product.id}`}>
            <div className="product__card">
                <div className="image__style">
                    <img src={`http://localhost:8000/images/${product.image}`} alt=""/>
                </div>
                <div className="vegetable__info">
                    <span className="vegetable__title">{product.phone}</span> <br/>
                    <span className="vegetable__price">{product.price}</span>
                    {/*<span>{product.brand.brand}</span>*/}
                    <div className="action">
                        <Link className="edit" to={`/phone/updatePhone/${product.id}`}>Edit</Link>
                        <button className="btn" onClick={onClick}>Delete</button>
                    </div>
                </div>
            </div>
        </Link>

    )
}