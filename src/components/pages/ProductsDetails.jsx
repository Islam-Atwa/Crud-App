
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

function ProductsDetails() {

    const [product, setProduct] = useState(null);
    const { productInfo } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9001/products/${productInfo}`)
            .then((res) => res.json())
            .then((product) => {
                setProduct(product);
            });
    }, []);

    return (
        <>
            <h1>{productInfo}</h1>
        </>
    
    );
}

export default ProductsDetails;