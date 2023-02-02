import React from 'react'
import axios from "axios";

import './Contact.css'

import {  useState } from "react";


function Contact(){
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const SendData = async (e) => {
        e.preventDefault();
        const newContact = {
            name,
            email,
            pwd
        };
        try {
   const res = await axios.post("http://localhost:5000/Contact/add", newContact);
          window.location.replace("/");
        } catch (err) { console.log(err) }

      };
  return (


    
   <>

 <h2 class="member">Contact us</h2>
      
           
        <form onSubmit={SendData} name="myForm" class="member1">
        <div class="mb-3 ">
        
            <input type="name" className="inputBox form-outline mb-4" placeholder="Name.." id="name" onChange={e=>setName(e.target.value)} required /> 
        </div>    
            
        <div class="mb-3">
         
            <input type="email" className="inputBox form-outline mb-4" placeholder="Email.." id="email" onChange={e=>setEmail(e.target.value)} required />

        </div>    
            
        <div>
            <input type="password" className="inputBox form-outline mb-4" placeholder="Password.." id="password" onChange={e=>setPwd(e.target.value)} required />
        </div>   
            <button type="submit" className ="signupBtn" >



          Sign Up !
        </button>
            
            
        </form>




    
</>
    
    );
  }
  
  export default Contact;