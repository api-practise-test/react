// import React, {Component, useEffect, useState} from 'react';
// import axios from "axios";
// import Swal from "sweetalert2";
//
// import { useNavigate } from "react-router-dom";
// import {useParams} from "react-router";
//
// export default function () {
//     const navigate = useNavigate();
//     const { id } = useParams();
//
//     const [phone, setPhone] = useState({
//         phone: "",
//         description: "",
//         price: 0.0,
//         brand_id: 1,
//         imageLink: "",
//         image: null
//     })
//
//     useEffect(() => {
//         fetchProduct();
//     }, []);
//
//     const fetchProduct = async () => {
//         await axios
//             .get(`http://localhost:8000/api/phones/${id}`)
//             .then(({data}) => {
//                 console.log(data);
//                 const {phone, description, price, brand_id, image} = data
//                 setPhone({...phone, phone: phone, description: description, price, brand_id, imgLink: image})
//             })
//             .catch(e => {
//                 Swal.fire({
//                     text: e.message,
//                     icon: "error",
//                 });
//             });
//     };
//
//     const changeHandler = (e) => {
//         setPhone({...phone, [e.target.name]: e.target.value})
//     }
//     const changeImageHandler = (event) => {
//         const image = event.target.files[0]
//         setPhone({...phone, image});
//     };
//
//     const updatePhone = async (e) => {
//         e.preventDefault();
//
//         const formData = new FormData();
//         formData.append("_method", "PATCH");
//         formData.append("phone", phone.phone);
//         formData.append("description", phone.description);
//         formData.append("brand_id", phone.brand_id)
//         formData.append("price", phone.price);
//         if (phone.image !== null) {
//             formData.append("image", phone.image);
//         }
//
//         await axios
//             .post(`http://localhost:8000/api/phones/${id}`, formData)
//             .then(({ data }) => {
//                 Swal.fire({
//                     icon: "success",
//                     text: data.message,
//                 });
//                 navigate("/phones");
//             })
//             .catch(({ response }) => {
//                     Swal.fire({
//                         text: response.data.message,
//                         icon: "error",
//                     });
//             });
//     };
//     return(
//         <form action="">
//
//         </form>
//     )
// }