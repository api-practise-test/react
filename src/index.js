import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Form from "./components/Form";
import SingleProduct from "./components/SingleProduct";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Router>
          <Routes>
              <Route path="/phone/postPhone" element={<Form/>}/>
              <Route path="/phone/updatePhone/:id" element={<Form/>} />
              <Route path="/phone/detailPage/:id" element={<SingleProduct/>}/>
              <Route exact path="/phones" element={<Home/>} />
          </Routes>
      </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
