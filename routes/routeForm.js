const router = require("express").Router();
const Contact = require("../models/Contact");


router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const pwd = req.body.pwd;
 
  
    const newContact = new Contact({
        
        name,
        email,
        pwd
    });
  
    newContact.save().then(() => res.json('Post added!'))
    (consol.log("post added"));
  });


  module.exports = router;