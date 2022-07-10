import React from "react";
import ProductCardList from "../containers/ProductCardList";
import SearchBar from "../components/SearchBar";


export default function Home() {
    return(
        <div>
            <SearchBar/>
            <ProductCardList/>
        </div>
    )
}
