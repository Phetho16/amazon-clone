import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams(); // Destructure id from the params object
    console.log(id); // Check if id is correctly retrieved

    return (
        <div>
            <h1>Product Details Page</h1>
            <p>{id}</p> {/* Display the id */}
        </div>
    );
};

export default ProductDetails;