import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const navigate = useNavigate();
    const handleUpdateProduct = (event) => {
        event.preventDefault();
        const quantity = event.target.quantity.value;

        const updatedProduct = { quantity };
        console.log(quantity)
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success!', data);
                alert(`The quantity product of this product is now ${data.quantity} `)

                event.target.quantity.value = " ";
                navigate('/home');
            })
    }

    return (
        <div className='container mt-2'>
            <div className="row">
                <div className="col-md-8">
                    <div className='text-enter w-75 mx-auto p-4 border'>
                        <h3> {product.name}</h3>
                        <img className='w-75' src={product.image} alt="" />
                        <p>Price: ${product.price}</p>
                        <p>ID: {id}</p>
                        <h5>Supplier: <span style={{ color: "orangeRed" }}>{product.supplier}</span></h5>
                        <h6><small>Description: </small>{product.description}</h6>
                        <h5>Quantity: <span style={{ color: "tomato" }}>{product.quantity}</span></h5>
                        <p>Sold: </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <h5 >Update <span className="text-warning">{product.name}</span></h5>
                    <h4> Restock The Items</h4>
                    <div className='container border text-center pb-5 w-75 mb-5' >
                        <Form onSubmit={handleUpdateProduct}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="text" placeholder="Enter Quantity" name="quantity" />

                            </Form.Group>
                            <Button variant="success" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default UpdateProduct;