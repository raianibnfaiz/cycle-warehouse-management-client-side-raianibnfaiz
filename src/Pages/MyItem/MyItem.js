import React from 'react';

const MyItem = ({ item, handleDelete }) => {
    const { name, _id, image, description, price, supplier, quantity, sold } = item;

    return (


        <div className='product col-md-5 col-sm-12 mx-auto border mb-4 p-3'>
            <img className='w-75' src={image} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>Supplier: <span style={{ color: "orangeRed" }}>{supplier}</span></p>
            <p><small>{description}</small></p>
            <h6>Quantity: <span style={{ color: "tomato" }}>{quantity}</span></h6>
            <h6>Number of Item Sold: <span style={{ color: "goldenRod" }}>{sold}</span></h6>
            <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>


        </div>
    );
};

export default MyItem;