import React from "react";
import ProductCardList from "../containers/ProductCardList";
import SearchBar from "../components/SearchBar";
import { Link } from 'react-router-dom';


export default function Home() {
    return(
        <div>
            <Link to={"/phone/postPhone"}>Creat A Phone</Link>
            <SearchBar/>
            <ProductCardList/>
        </div>
    )
}
