import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import ManageInventory from '../../ManageInventory/ManageInventory';
const Products = () => {
    const [products, setProducts] = useState([]);
    const firstSixProducts = products.slice(0, 6);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className=''>
            <div className=" ">
                <h1 className='text-primary text-center mt-5 '> Our products</h1>

                <div className="products-container row m-4">
                    {
                        firstSixProducts.map(product => <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>)
                    }
                </div>
                <div className="container p-4 mb-5">
                    <div style={{ height: "1px" }} className='container mb-2 t-4 w-25 mx-auto bg-dark '>

                    </div>
                    <Link to='/manageInventories' element={<ManageInventory></ManageInventory>}>
                        <button className="btn btn-dark">Manage Inventories</button>

                    </Link>
                    <div style={{ height: "1px" }} className='container mt-2 mb-4 w-25 mx-auto bg-dark '>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Products;