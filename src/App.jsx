
import React from "react";

import {Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar"; 
import Sidebar from "./components/Sidebar";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import AddProduct from "./components/pages/AddProduct";
import ProductsDetails from "./components/pages/ProductsDetails";

// import ProductsDetails from "./components/pages/ProductsDetails";



import './App.css'
import './index.css';
function App() {

  return (
    <div className="App">
      <Navbar/>

      <div className='row'>
        <div className="col-2 sidebar">
          <Sidebar/>

        </div>

        <div className='col-10'>

          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="products" element={< Products/> }/>
            <Route path="product/add" element={ <AddProduct/>} />
            <Route path="/products/:productInfo" element={<ProductsDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
