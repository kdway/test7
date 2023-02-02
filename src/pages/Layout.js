import {Outlet} from "react-router-dom";
import './Layout.css'



const Layout = () => {
  return (
    <>

<nav class="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact">Contact</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex mb-5" >
  
  {/* Select box to change language */}
  <select className="custom-select" style={{width: 200}} onChange={changeLanguageHandler}>
  <option value="en" >English</option>
  <option value="fr" >French</option>
  </select>


</form>
    </div>
  </div>
</nav>



<Outlet />

     <footer class="bg-light" id="tempaltemo_footer">
   <div class="container">
       <div class="row">
           <div class="col-md-4 pt-5">
               <h2 class="h2 text-black border-bottom pb-3 border-light logo">EasyShop</h2>
               <ul class="list-unstyled text-light footer-link-list">
                   <li>
                       <i class="fas fa-map-marker-alt fa-fw"></i>
                       Tunisia
                   </li>
                   <li>
                       <i class="fa fa-phone fa-fw"></i>
                       <a class="text-decoration-none text-black" href="#">000-000-0000</a>
                   </li>
                   <li>
                       <i class="fa fa-envelope fa-fw"></i>
                       <a class="text-decoration-none text-black" href="#">info@company.com</a>
                   </li>
               </ul>
           </div>
           <div class="col-md-4 pt-5">
               <h2 class="h2 text-light border-bottom pb-3 border-light">Products</h2>
               <ul class="list-unstyled text-light footer-link-list">
                   <li><a class="text-decoration-none text-black" href="#">Luxury</a></li>
                   <li><a class="text-decoration-none text-black" href="#">Sport Wear</a></li>
                   <li><a class="text-decoration-none text-black" href="#">Men's Shoes</a></li>
                   <li><a class="text-decoration-none text-black" href="#">Women's Shoes</a></li>
                   <li><a class="text-decoration-none text-black" href="#">Popular Dress</a></li>
                   <li><a class="text-decoration-none text-black" href="#">Gym Accessories</a></li>
                   <li><a class="text-decoration-none text-black" href="#">Sport Shoes</a></li>
               </ul>
           </div>
           <div class="col-md-4 pt-5">
               <h2 class="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
               <ul class="list-unstyled text-light footer-link-list">
                   <li><a class="text-decoration-none text-black" href="/">Home</a></li>
                   <li><a class="text-decoration-none text-black" href="/About">About Us</a></li>
                   <li><a class="text-decoration-none text-black" href="#">Shop Locations</a></li>
                   <li><a class="text-decoration-none text-black" href="#">FAQs</a></li>
                   <li><a class="text-decoration-none text-black" href="/Contact">Contact</a></li>
               </ul>
           </div>
       </div>
       <div class="row text-light mb-4">
           <div class="col-12 mb-3">
               <div class="w-100 my-3 border-top border-light"></div>
           </div>
           <div class="col-auto me-auto">
               <ul class="list-inline text-left footer-icons">
                   <li class="list-inline-item border border-light rounded-circle text-center">
                       <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                   </li>
                   <li class="list-inline-item border border-light rounded-circle text-center">
                       <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                   </li>
                   <li class="list-inline-item border border-light rounded-circle text-center">
                       <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                   </li>
                   <li class="list-inline-item border border-light rounded-circle text-center">
                       <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                   </li>
               </ul>
           </div>
           <div class="col-auto">
               <label class="sr-only" for="subscribeEmail">Email address</label>
               <div class="input-group mb-2">
                   <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                   <div class="input-group-text btn-warning text-light">Subscribe</div>
               </div>
           </div>
       </div>
   </div>
   <div class="w-100 bg-black py-3">
       <div class="container">
           <div class="row pt-2">
               <div class="col-12">
                   <p class="text-left text-light">
                       Copyright &copy; 2021 Company Name 
                       | Designed by <a rel="sponsored" href="#" target="_blank">Jassa</a>
                   </p>
               </div>
           </div>
       </div>
   </div>
 </footer>


 


     
    </>
  );
}

export default Layout
