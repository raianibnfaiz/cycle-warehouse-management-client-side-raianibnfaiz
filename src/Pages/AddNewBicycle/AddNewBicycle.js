import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const AddNewBicycle = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = user.email;
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const supplier = event.target.supplier.value;
        const image = event.target.image.value;
        const quantity = event.target.quantity.value;
        const sold = event.target.sold.value;
        const newCycle = { email, name, image, description, price, supplier, quantity, sold };
        console.log(newCycle);
        fetch('https://nameless-woodland-97201.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCycle)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success!', data);
                event.target.reset();
                navigate('/home');
            })

    }
    return (
        <div className="w-50 mx-auto p-2 mb-5">
            <h1 className='text-secondary text-center m-2'>Add a new bicycle</h1>
            <form className='d-flex flex-column' style={{ fontFamily: 'Mate SC' }} onSubmit={handleSubmit}>
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required />
                <input className='mb-2' name="name" placeholder='Name' type="text" required />
                <textarea className='mb-2' name="description" placeholder='Description' required />
                <input className='mb-2' placeholder='Price' name="price" type="number" required />
                <input className='mb-2' placeholder='Photo URL' name="image" type="text" required />
                <input className='mb-2' name="supplier" placeholder='Supplier' type="text" required />
                <input className='mb-2' placeholder='Quantity' name="quantity" type="number" required />
                <input className='mb-2' placeholder='Number Of Item Sold' name="sold" type="number" required />

                <button type="submit" className="mt-2 w-75 mx-auto btn btn-primary">Add Product</button>
            </form>
        </div>
    );
};

export default AddNewBicycle;