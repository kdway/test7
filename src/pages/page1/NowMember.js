import React from 'react'
import axios from "axios";
import './NowMember.css'
import {  useState } from "react";


function NowMember(){
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPass] = useState("");
    const [pwd2, setPass2] = useState("");

    const SendData = async (e) => {
        e.preventDefault();
        const newContact = {
            name,
            email,
            pwd,
            pwd2,
        };
        try {
   const res = await axios.post("http://localhost:5000/Member/add", NowMember);
          window.location.replace("/");
        } catch (err) { console.log(err) }

      };

    return (
        <>
<div class="sub2 mb-5">
 <h2 class="member">Submit for New Member</h2>

  <div class="form2" onSubmit={SendData}>

  <div class="mb-3">
    <label for="exampleInputName" class="form-label">Name</label>
    <input type="Name" class="form-control" id="exampleInputName" placeholder='Name..'  onChange={e=>setName(e.target.value)} required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email Adress..'  onChange={e=>setEmail(e.target.value)} required/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password..'  onChange={e=>setPass(e.target.value)} required/>
  </div>
  

  <div class="mb-3">
    <label for="exampleInputPassword2" class="form-label">Password</label>
    <input type="password2" class="form-control" id="exampleInputPassword2" placeholder='Retype Password..'  onChange={e=>setPass2(e.target.value)} required/>
  </div>
  
  
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label mb-3" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-dark ">Submit</button>
  
  </div>
  </div>



  
           
        </>


)

}

export default NowMember