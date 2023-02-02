import React from "react";
import posts from "./posts";
import { Link } from "react-router-dom";
import './Jeans.css'
const Jeans = () => {
  const products = posts.map(product => {
    return (
      <div className="container">

      
      <div className="name" key={product.id}>
       
        <img src={product.image}></img>
        
        <h3>
          <Link to={`/JeansDetail/${product.id}`}><span className="color">View Detail</span></Link>
        </h3>
       
      
      </div>
      </div>
    );
    
  });

  return (
    <>
      <h1>Products Page</h1>
      <div className="grid">
         {Jeans}
      </div>
     
    </>
  );
};

export default Jeans;
