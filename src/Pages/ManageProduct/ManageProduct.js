import React from 'react';
import useProducts from '../../hooks/useProducts';

const ManageProduct = ({ product, handleDelete }) => {
    const { _id, name, image, description, price, supplier, quantity } = product;


    return (
        <div className='product col-md-5 col-sm-12 mx-auto border mb-5 mt-4 p-3'>
            <img style={{ border: "2px solid skyBlue" }} className='w-75' src={image} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>Supplier: <span style={{ color: "orangeRed" }}>{supplier}</span></p>
            <p><small>{description}</small></p>
            <h4>Quantity: <span style={{ color: "tomato" }}>{quantity}</span></h4>
            <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
        </div>
    );
};

export default ManageProduct;