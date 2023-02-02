import React from "react"
import {useParams} from "react-router-dom"
import posts from "./posts"
import {Link} from "react-router-dom"


function JeansDetail() {
    const {productId} = useParams()
    const thisProduct = posts.find(prod => prod.id === productId)
    
    return (
       
          <div class="row g-0 mb-3 ">
             <div class="col-md-4 img shadow-lg p-3 mb-5 bg-body rounded">
                 <img src={thisProduct.image}></img>
             </div>
    <div class="col-md-4">
      <div class="card-body des">
         <h1>{thisProduct.name}</h1>
         <p>{thisProduct.description}</p>
         <h3>Price: ${thisProduct.price}</h3>
         <Link to="/products"><button className="button">Back to Product</button></Link>
      </div>
    </div>
    </div>
  
    
  

    
    )
}

export default JeansDetail