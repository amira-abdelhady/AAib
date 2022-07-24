import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import axiosInstance from './../axiosConfig/axiosInstance';
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("products",{params:{limit:10}})
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  // axios.post("url","data",{params:{}})

  return (
    <>
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/details/${product.id}`} >
            <li >{product.title}</li>
          </Link>
        );
      })}
    </>
  );
};

export default Products;
