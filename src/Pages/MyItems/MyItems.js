import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [myItem, setMyItem] = useState([]);
    const [user, loading] = useAuthState(auth);

    useEffect(() => {

        const getProducts = async () => {
            const email = user.email;
            console.log(email);
            const url = `http://localhost:5000/myProducts?email=${email}`;
            const { data } = await axios.get(url);
            setMyItem(data);
        }
        getProducts();
        //console.log(`http://localhost:5000/products?email=${email}`);

    }, [user])
    if (loading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            {
                myItem.length === 0 ?
                    <div style={{ border: "1px solid skyBlue", borderRadius: "5px" }} className='w-50 p-4 mx-auto mt-5'><h2 className="text-center text-warning p-5">You Have Not Added Any<br /> <span className="text-center" style={{ color: "tomato" }}> Product</span> Yet!</h2></div>

                    :

                    myItem.map(item => <MyItem key={item._id} item={item}></MyItem>)
            }
        </div>
    );
};

export default MyItems;