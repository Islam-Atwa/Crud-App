import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Products(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getAllProducts();
    },[]);   

    const getAllProducts = ()=>{
        fetch('http://localhost:9000/products')
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            setProducts(data);
        });
    }


    // Function to delete a product
const deleteProduct = (productInfo)=>{
        fetch(`http://localhost:9000/products/${productInfo}`,{
            method: 'DELETE',
        })
        .then((res)=> res.json())
        .then(()=>{
            getAllProducts()
       });
};

    return (
        <>
            <h1>Products Page</h1>
            <Link className="btn btn-success mt-3" to={'/product/add'}> Add New Product </Link>

            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody >
                    {products.map((product)=>{
                        return (
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>

                                <td className="d-flex justify-content-around">
                                    <Link to={`/products/${product.id}`} className="btn btn-success">View</Link>
                                    <button className="btn btn-primary">Edit</button>
                                    <button className="btn btn-danger" onClick={()=> deleteProduct(product.id)}>Delete</button>
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
                
                

            </table>
        
        </>
    )
}

export default Products;