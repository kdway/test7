const router = require("express").Router();
const Member = require("../models/Member");


router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const pwd = req.body.pwd;
    const pwd2 = req.body.pwd2;
 
  
    const newMember = new Memeber({
        
        name,
        email,
        pwd,
        pwd2
    });
  
    newMember.save().then(() => res.json('Post added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });


  module.exports = router;