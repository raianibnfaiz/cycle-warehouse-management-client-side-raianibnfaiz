import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, image, description, price, supplier, quantity } = product;
    const navigate = useNavigate();
    const navigateToProductUpdate = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div className='product col-md-5 col-sm-12 mx-auto border mb-2 p-3'>
            <img className='w-75' src={image} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>Supplier: <span style={{ color: "orangeRed" }}>{supplier}</span></p>
            <p><small>{description}</small></p>
            <h6>Quantity: <span style={{ color: "tomato" }}>{quantity}</span></h6>
            <button onClick={() => navigateToProductUpdate(_id)} className='btn btn-primary'>Stock Update</button>
        </div>
    );
};

export default Product;