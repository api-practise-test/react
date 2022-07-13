import React from "react";
import ProductCardList from "../containers/ProductCardList";
import SearchBar from "../components/SearchBar";
import { Link } from 'react-router-dom';
import '../asset/css/productCard.css'
import Brand from "../components/Brand";

export default function Home() {
    return(
        <div className="container">
            <Link className="create__button" to={"/phone/postPhone"}>Add</Link>
            <SearchBar/>
            <Brand/>
            <ProductCardList/>
        </div>
    )
}
