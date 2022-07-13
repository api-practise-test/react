import React, {Component} from 'react';
import ProductCard from "../components/ProductCard";
import axios from "axios";
import Swal from "sweetalert2";
import EventEmitter from "../utils/EventEmitter";
import '../asset/css/productCard.css';


export default class ProductCardList extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            products: [],
            keyword: ""
        }

        this.delete = this.delete.bind(this)
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

    async delete(id)
    {
        console.log(id);
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "'You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            return result.isConfirmed
        });

        if(!isConfirm) {
            return;
        }
        await axios.delete(`http://localhost:8000/api/phones/${id}`).then((data) => {
            Swal.fire({
                icon:"success",
                text:data.message
            })
            this.initProductsState()
        }).catch(({response:{data}}) => {
            Swal.fire({
                text:data.message,
                icon:"error"
            })
        })

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
    async getProductsByPrice(eventData)
    {
        const response = await axios.get(`http://127.0.0.1:8000/api/get-phones-by-price`, {
            params: {
                price: eventData.price
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
            result = <div>is loading...</div>
        }
        else
        {
            result = this.state.products.map((product, index) => {
                console.log(product)
                return <ProductCard
                    onClick={() => this.delete(product.id)}
                    key={index}
                    product={product}
                />
            })
        }

        return(
            <div className="product__wrapper">
                {result}
            </div>
        )
    }
}