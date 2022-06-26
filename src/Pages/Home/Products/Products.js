import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className=''>
            <div className=" ">
                <h1 className='text-primary text-center mt-5 '> Our products</h1>
                <div className="products-container row m-5">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;