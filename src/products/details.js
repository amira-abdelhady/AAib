import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from './../axiosConfig/axiosInstance';
const Details = (props) => {
  console.log(props);
  const params = useParams();
  // const test=()=>{
  //     props.history.push("/details/5")
  // }

      const [product,setProduct]= useState({})

  useEffect(() => {

    axiosInstance
      .get(`products/${params.id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return <>
  <h1>{product.id}</h1>
  <h2>{product.title}</h2>
  <img src={product.image}/>
  </>;
};

export default Details;
