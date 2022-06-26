import React from 'react';
import useProducts from '../../hooks/useProducts';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageInventory = () => {
    const [products, setProducts] = useProducts();
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            const url = `http://localhost:5000/product/${id}`
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

            <div className="row  m-5">
                {
                    products.map(product =>
                        <ManageProduct key={product._id} handleDelete={handleDelete} product={product}></ManageProduct>)
                }
            </div>


        </div>
    );
};

export default ManageInventory;