
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

function ProductsDetails() {

    const [product, setProduct] = useState(null);
    const { productInfo } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9000/products/${productInfo}`)
            .then((res) => res.json())
            .then((product) => {
                setProduct(product);
            });
    }, []);

    return (
        <>
            <h1>Product Details</h1>
            {product && (
                <>
                    <div className="d-flex gap-2  ">
                            <h3 className="">product Title :</h3>
                            <h3> {product.title}</h3>

                    </div>
                
                </>
            )}
            
            {product && <img className="text-align-center"src={product.image} />}

            {product && <h2 className="">ID : {product.id}</h2>}
            {product && <h1>Description : {product.description}</h1>}
        </>
    
    );
}

export default ProductsDetails;