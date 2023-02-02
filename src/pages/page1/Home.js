import { Outlet} from "react-router-dom";
import{posts} from "../posts";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import ProductAlerts from './ProductAlerts';
import './Home.css'
const Home = (

 ) => {
  const [image, setImage] = useState("image");

  
  const share = () => {
    window.alert('The product has been shared!');
  }

  const onNotify = () => {
    window.alert('You will be notified when the product goes on sale');
  }
    return (

      
      <>
       
       <div className='container mb-5'>
              <div className='row'>
                <div className='col-8'>
                    <img className='haupt-product' style={{widht:'55em'}} src={image}/>
                </div>
                <div className='col-4'>
                   <div className='colors'>
    <button
        type="button rounded m-2" style={{backgroundColor:'blue',widht:'4em',height:'2em',borderRadius:'1.2em'}}
        onClick={() => setImage("./jacket.jpg")}
      ><img className='index0' src='/jacket.jpg'/></button>
      <button
        type="button m-2"  style={{backgroundColor:'yellow',widht:'4em',height:'2em',borderRadius:'1.2em'}}
        onClick={() => setImage("./p-blau.png")}
      ><img className='index1'  src='/p-blau.png'/></button>
      <button
        type="button" style={{backgroundColor:'pink',widht:'4em',height:'2em',borderRadius:'1.2em'}}
        onClick={() => setImage("./ch-blau.png")}
      ><img className='index2' src='/ch-blau.png'/></button>
      <button
        type="button" style={{backgroundColor:'black',widht:'4em',height:'2em',borderRadius:'1.2em'}}
        onClick={() => setImage("./ch-black.png")}
      ><img className='index3' src='/ch-black.png'/></button>
      
    </div>            
      
                
             
    

                </div>
                
           
              

              </div>

            </div>






<nav class="navbar3 navbar-expand-lg navbar-light p-4 mb-5">
  <div class="container-fluid">
 
      <i class="fas fa-bars"></i>
    
    <div class="navbar0 d-flex justify-content-center  n5" id="navbarNav">
      <ul class="navbar-nav n2">
        
      <div class="dropdown n4 mt-5">
  <button class="dropbtn w-100"  style={{fontSize:'25px'}}>Homme</button>
  <div class="dropdown-content">
    <a class="nav-link active" aria-current="page" href="/Jeans">Jeans</a>
    <a class="nav-link" href="#">Pullover</a>
    <a class="nav-link" href="">Hemden</a>
    <a class="nav-link" href="">Hosen</a>
    <a class="nav-link" href="/Schuhe">Schuhe</a>
  </div>
</div>
        
                  
      <div class="dropdown n4 mt-5">
  <button class="dropbtn w-100" style={{fontSize:'25px'}}>Femme</button>
  <div class="dropdown-content">

    <a class="nav-link active" aria-current="page" href="#">Jeans</a>
    <a class="nav-link" href="/Klamotten">klamotten</a>
    <a class="nav-link" href="">Unterwäsche</a>
    <a class="nav-link" href="">BH</a>
    <a class="nav-link" href="">Botts</a>
    <a class="nav-link" href="">Pullover</a>
  </div>
</div>
       
                  
      <div class="dropdown n4 mt-5">
  <button class="dropbtn w-100" style={{fontSize:'25px'}}>Enfants</button>
  <div class="dropdown-content">
    <a class="nav-link active" aria-current="page" href="#">Jeans</a>
    <a class="nav-link" href="#">test1</a>
    <a class="nav-link" href="">test2</a>
  </div>
</div>

<div class="dropdown n4 mt-5">
  <button class="dropbtn w-100" style={{fontSize:'25px'}}>Accessories</button>
  <div class="dropdown-content">
    <a class="nav-link active" aria-current="page" href="#">test1</a>
    <a class="nav-link" href="/Acessories">Pondy's</a>
    <a class="nav-link" href="#">test3</a>
    <a class="nav-link" href="#">test4</a>
    <a class="nav-link" href="#">test5</a>
    <a class="nav-link" href="#">test7</a>
  </div>
</div>
        
       
      </ul>
    </div>
  </div>
</nav>






  





<div className="product-list rounded">
    
 {posts.map((post, index) => {
      return (
        <div className="card ">
        
            <Link to={`$posts/${index}`} title={`${post.name} details`}> 
             
              <img className='image h-100 w-100' src={ post.image}></img>
              <h1>{post.title}</h1>
             
              <h3>Price: ${post.price}</h3>
            </Link>
        
          
          <button onClick={share}>
            Share
          </button>
          <ProductAlerts post={post} notify={onNotify} />
        </div>
      )
    })}
  </div>


   


    





     <Outlet />





         




  
<div class="Angebot">
        <div class="card w-100 h-50 mt-5 ms-1 me-1 bg-light ">
         <h2 class="an">Hello CollectionGo Member</h2>
         
         <p class='an1'>Member erhalten 15% Rabatt auf den gesamten Einkauf</p>
         <h6 class="an2">Members Days </h6>
         <div class="bt">
         <a class=" btn btn-outline-dark w-25 ms-5 mt-5" href="http://localhost:3000/NowMember">Now Member Submit</a> 
         </div>
         <p class="gul"> Gültig vom 4.-5.3.22. Das Angebot ist nicht mit anderen Angeboten, Rabatten, Sale-Artikeln oder... Weitere Informationen </p>
        </div>

    </div>
    

    <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap mb-5 mt-5 ">
        <div class="card d-flex position-relative flex-column cards-lux">
            <div class='imgContainer'>
                <img src='./jeans-b.png'/>
            </div>
            <div class="content">
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.</p>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
                <img src='./p-blau.png'/>
            </div>
            <div class="content">
                <h2>Card Two</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh..</p>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
                <img src='./ch-black.png'/>
            </div>
            <div class="content">
                <h2>Card Three</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.</p>
            </div>
        </div>
    </div>
        

   

</>     

       
    );
  
    
}
  
  export default Home;