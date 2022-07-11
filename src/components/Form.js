import React, {Component} from 'react';
import axios from "axios";
import Swal from "sweetalert2";


export default class Form extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            brands: [],
            phone: {
                phone: "",
                description: "",
                price: 0.0,
                brand_id: 1,
                image: null
            }
        }

        this.handleChange = this.handleChange.bind(this);
    }

    async initBrandsState()
    {
        const response = await axios.get(`http://127.0.0.1:8000/api/brands`)
        this.setState({
            brands: response.data
        })
    }

    async componentDidMount()
    {
        await this.initBrandsState()
    }

    handleChange(event)
    {
        this.setState({
            phone: {
                ...this.state.phone,
                [event.target.name]: event.target.type === 'file'
                ? event.target.files[0]
                : event.target.value
            }
        });
    }

    async onSubmit()
    {
        const formData = new FormData();
        const {phone, description, price, brand_id, image} = this.state.phone
        formData.append("phone", phone)
        formData.append("description", description)
        formData.append("brand_id", brand_id)
        formData.append("price", price)
        formData.append("image", image)
        console.log(this.state.phone);
        const res = await axios.post('http://127.0.0.1:8000/api/phones', formData);

        if (res.status === 200) {
            Swal.fire({
                icon: "success",
                text: res.data.message,
            });
            return;
        }
        Swal.fire({
            text: res.statusText,
            icon: "error",
        });
    }



    render() {
        return(
            <form encType="mutilpart/form-data" method="post">
                <label htmlFor="phone">
                    <span>Phone</span>
                    <input type="text" name="phone" onChange={(event)=>this.handleChange(event)} />
                </label>
                <label htmlFor="description">
                    <span>Description</span>
                    <input type="text" name="description" onChange={(event)=>this.handleChange(event)} />
                </label>
                <label htmlFor="price">
                    <span>Price</span>
                    <input type="number" name="price" onChange={(event)=>this.handleChange(event)} />
                </label>
                <label htmlFor="brand">
                    <span>Brand</span>
                    <select name="brand_id" id="brand_id" onChange={(event)=>this.handleChange(event)}>
                        {
                            this.state.brands.map((brand, index) =>
                                (<option key={index} checked={index === 0 ? true : false} value={brand.id}>{brand.brand}</option>))
                        }
                    </select>
                </label>
                <label htmlFor="image">
                    <span>Image</span>
                    <input type="file" name="image" onChange={(event)=>this.handleChange(event)}/>
                </label>
                <button type={"button"} onClick={() => this.onSubmit()}> submit </button>
            </form>
        )
    }
}