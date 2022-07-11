import React from "react";
import ProductCardList from "../containers/ProductCardList";
import SearchBar from "../components/SearchBar";
import { Link } from 'react-router-dom';
import '../asset/css/productCard.css'

export default function Home() {
    return(
        <div className="container">
            <Link to={"/phone/postPhone"}>Creat A Phone</Link>
            <SearchBar/>
            <ProductCardList/>
        </div>
    )
}
