import React, {Component} from 'react';
import ProductCard from "../components/ProductCard";
import axios from "axios";
import EventEmitter from "../utils/EventEmitter";


export default class ProductCardList extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            products: [],
            keyword: ""
        }

        this.getProductsByKeyword = this.getProductsByKeyword.bind(this);
    }

    async initProductsState()
    {
        const response = await axios.get(`http://127.0.0.1:8000/api/phones`);
        this.setState({
            products: response.data
        });
    }

    async componentDidMount()
    {
        let searchListener = EventEmitter.addListener('search-event', this.getProductsByKeyword)
        await this.initProductsState();
    }

    delete(id)
    {
        console.log(id);
    }

    async getProductsByKeyword(eventData)
    {
        const response = await axios.get(`http://127.0.0.1:8000/api/get-phones-by-keyword`, {
            params: {
                keyword: eventData.keyword
            }
        });
        console.log(response.data);
        this.setState({
            products: response.data
        });
    }

    render ()
    {
        let result;
        if(this.state.products === [])
        {
            result = <div>is loading</div>
        }
        else
        {
            result = this.state.products.map((product, index) => {
                return <ProductCard
                    onClick={() => this.delete(product.id)}
                    key={index}
                    phone={product.phone}
                    description={product.description}
                    price={product.price}
                    brand={product.brand.brand}
                    image={product.image}
                />
            })
        }

        return(
            <div>
                {result}
            </div>
        )
    }
}