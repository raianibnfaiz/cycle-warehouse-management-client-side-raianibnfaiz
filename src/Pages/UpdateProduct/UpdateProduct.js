import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ManageInventory from '../ManageInventory/ManageInventory';
import useProducts from '../../hooks/useProducts';

const UpdateProduct = () => {
    const { id } = useParams();
    const [products, setProducts] = useProducts();
    const [updateProduct, setUpdateProduct] = useState({});
    useEffect(() => {
        fetch(`https://nameless-woodland-97201.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setUpdateProduct(data))
    }, [])

    const navigate = useNavigate();
    const handleUpdateProduct = (event) => {
        event.preventDefault();
        const quantity = event.target.quantity.value;

        const updatedProductQuantity = { quantity };
        console.log(quantity)
        const url = `https://nameless-woodland-97201.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProductQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success!', data);
                alert(`The quantity of ${updateProduct.name} is now ${data.quantity} `)

                event.target.quantity.value = " ";
                navigate('/home');
            })
    }
    const handleDelivered = (id) => {
        if (window.confirm("Are you sure you want to deliver?")) {
            const url = `https://nameless-woodland-97201.herokuapp.com/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                    console.log(data);
                    navigate('/home');
                })
        }
    }

    return (
        <div className='container mt-2'>

            <div className="row">
                <div className="col-md-7">
                    <div className='text-enter w-75 mx-auto p-4 mb-4 border'>
                        <h3> {updateProduct.name}</h3>
                        <img className='w-75' src={updateProduct.image} alt="" />
                        <p>Price: ${updateProduct.price}</p>
                        <p>ID: {id}</p>
                        <h5>Supplier: <span style={{ color: "orangeRed" }}>{updateProduct.supplier}</span></h5>
                        <h6><small>Description: </small>{updateProduct.description}</h6>
                        <h5>Quantity: <span style={{ color: "tomato" }}>{updateProduct.quantity}</span></h5>
                        <h6>Item Sold :<span style={{ color: "goldenRod" }}> {updateProduct.sold}</span> </h6>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="container pb-5 mt-1">
                        <div style={{ height: "1px" }} className='container mb-2 w-25 mx-auto bg-primary '>

                        </div>
                        <Link to='/manageInventories' element={<ManageInventory></ManageInventory>}>
                            <button style={{ border: "2px solid orangeRed", borderRadius: "5px" }} className="btn btn-dark">Manage Inventories</button>
                        </Link>

                        <div style={{ height: "1px" }} className='container mt-2 w-25 mx-auto bg-warning '>

                        </div>
                    </div>
                    <h5 >Update <span style={{ color: "tomato" }}>{updateProduct.name}</span></h5>
                    <h4> Restock The Items</h4>
                    <div className='container border text-center pb-5 w-100 mb-5' >
                        <Form onSubmit={handleUpdateProduct}>
                            <Form.Group className="mb-4 " >
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="text" placeholder="Input Quantity Number" name="quantity" />

                            </Form.Group>
                            <Button variant="success" type="submit">
                                Update
                            </Button>
                        </Form>
                    </div>
                    <div className="container pb-5 mb-3">
                        <div style={{ height: "1px" }} className='container mb-2 w-25 mx-auto bg-primary '>

                        </div>
                        <button onClick={() => handleDelivered(id)} className="btn btn-danger">Delivered</button>
                        <div style={{ height: "1px" }} className='container mt-2 w-25 mx-auto bg-warning '>

                        </div>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default UpdateProduct;