import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
const Product = ({ product }) => {
    const { _id, name, image, description, price, supplier, quantity, sold } = product;
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
            <h4>Quantity: <span style={{ color: "tomato" }}>{quantity}</span></h4>
            <h4>Number of Item Sold: <span style={{ color: "goldenRod" }}>{sold}</span></h4>
            <button onClick={() => navigateToProductUpdate(_id)} className='btn btn-primary'>Stock Update</button>
        </div>
    );
};

export default Product;