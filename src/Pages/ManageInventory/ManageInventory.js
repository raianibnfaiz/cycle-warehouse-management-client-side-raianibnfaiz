import React from 'react';
import useProducts from '../../hooks/useProducts';
import AddNewBicycle from '../AddNewBicycle/AddNewBicycle';
import ManageProduct from '../ManageProduct/ManageProduct';
import { Link } from 'react-router-dom';

const ManageInventory = () => {
    const [products, setProducts] = useProducts();
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            const url = `https://bicycle-fnka.onrender.com/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                    console.log(data);
                })
        }
    }
    return (
        <div>
            <div className="mt-2 w-50 mx-auto">
                <Link to='/addProduct' element={<AddNewBicycle></AddNewBicycle>}>
                    <button style={{ border: "3px solid goldenRod" }} className='btn btn-success'>Add New Bicycle</button>
                </Link>
            </div>
            <div className="row  m-4">
                {
                    products.map(product =>
                        <ManageProduct key={product._id} handleDelete={handleDelete} product={product}></ManageProduct>)
                }
            </div>


        </div>
    );
};

export default ManageInventory;