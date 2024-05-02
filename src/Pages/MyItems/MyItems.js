import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import MyItem from '../MyItem/MyItem';
import useProducts from '../../hooks/useProducts';

const MyItems = () => {
    const [myItem, setMyItem] = useState([]);
    const [user, loading] = useAuthState(auth);
    const [products, setProducts] = useProducts();
    useEffect(() => {

        const getProducts = async () => {
            const email = user.email;
            console.log(email);
            const url = `https://bicycle-fnka.onrender.com/myProducts?email=${email}`;
            const { data } = await axios.get(url);
            setMyItem(data);
        }
        getProducts();
        //console.log(`https://bicycle-fnka.onrender.com/products?email=${email}`);

    }, [user])
    if (loading) {
        return <Loading></Loading>;
    }
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            const url = `https://bicycle-fnka.onrender.com/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    const remainingMyItems = myItem.filter(product => product._id !== id);
                    setProducts(remaining);
                    setMyItem(remainingMyItems);
                    console.log(data);
                })
        }
    }
    return (
        <div>
            <h5 className="m-1 p-1 text-center">My Email:<br /><span style={{ color: "orangeRed" }}>{user.email}</span></h5>
            <div className="row m-4">
                {
                    myItem.length === 0 ?
                        <div style={{
                            textAlign: 'justify',
                            textJustify: 'inter-word'
                        }} className='w-75 p-4 mx-auto mt-3'><h2 className="text-center text-warning p-5">You Have Not Added Any<br /> <span className="text-center" style={{ color: "tomato" }}> Product</span> Yet!</h2></div>

                        :

                        myItem.map(item => <MyItem key={item._id} handleDelete={handleDelete} item={item}></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;