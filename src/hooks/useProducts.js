import { useEffect, useState } from "react";
const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://bicycle-fnka.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return [products, setProducts];
}
export default useProducts;