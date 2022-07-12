import React, {useEffect, useState} from 'react';
import '../asset/css/productCard.css';
import {useParams} from "react-router";
import axios from "axios";

export default function SingleProduct() {

    const params = useParams();

    const [phone, setPhone] = useState(null)

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/phones/detail/` + params.id)
            .then(res => {
                console.log("data", res.data)
                setPhone(res.data.data)
            });
    }, [])
    // console.log("phone: ", phone)
    return phone
        ?
    (
        <div>
            <img src={`http://localhost:8000/images/${phone.image}`} alt=""/>
            <span className="phone__title">{phone.phone}</span>
            <span>{phone.description}</span>
            <span className="phone__price">{phone.price}</span>
            <span>{phone.brand.brand}</span>
        </div>
    ) :
        <div>Loading...</div>
}