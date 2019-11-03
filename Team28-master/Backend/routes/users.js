var express = require('express');
var router = express.Router();
var User =  require("../models/Users.js")
const bcrypt = require('bcrypt');


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("Getting user Details");
    res.send('respond with a resource');
});

router.post('/login',function(req,res,next){
  console.log(req.body.email);
  User.findOne({
    'email' : req.body.email,
  },(err,user)=>
  {
      
      if(err)
        {
          
          res.send(err) }
     else
       {
         if(user) {
       
      if (!bcrypt.compareSync(req.body.password, user.password)) {    
              
        console.log("Error in creating Course.", err);
        res.writeHead(204, {
            'Content-type': 'text/plain'
        });
        res.end('Error');           
        }
      else
      { 
        console.log("User Found");
          res.send(user)
      }
    } else {
      console.log("Error in creating Course.", err);
      res.writeHead(204, {
          'Content-type': 'text/plain'
      });
      res.end('Error');
    }
    }
      
  })
})


router.post('/signup',function(req,res,next){

  var encrypted_password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
  if (req.body.email && req.body.username && req.body.password ) 
  {
    var userData = new User({
          email: req.body.email,
          username: req.body.username,
          password: encrypted_password,
          role : req.body.role,
          isAuthenticatedWithGoogle : "No"
      });

    // console.log(userData)
    // console.log("Request Data" + userData);
    userData.save().then((doc) => {
      console.log("Course added successfully.", doc);
      res.end("Done");
    
    }, (err) => {
      console.log("Unable to add course.", err);
      res.end(err);
     
    }); 
  }
});


router.post('/signupWithGoogle',function(req,res,next){
    var userData = new User({
          email: req.body.email,
          username: req.body.username,
          role : "user",
          isAuthenticatedWithGoogle : "Yes"

      });

    userData.save().then((doc) => {
      console.log("User added successfully.", doc);
      res.end("Done");
    
    }, (err) => {
      console.log("Unable to add course.", err);
      res.send(err);
     
    }); 
  
});






module.exports = router;
