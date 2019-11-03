var express = require('express');
var router = express.Router();
var FederalService = require("../models/FederalServices")
var CategoryServices = require("../models/Categories")

//'mongodb://localhost:27017'
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addService',function(req,res){
  
  var Service = new FederalService({
    Name : req.body.Name,
    Location : req.body.Location,
    Description : req.body.Description,
    URL : req.body.URL,
    Category : req.body.Category
  })

  console.log("Service Object"+Service.Name)
  Service.save().then((doc) => {
    console.log("Service added successfully.", doc);
    res.send(doc);
  }, (err) => {
    console.log("Unable to add service.", err);
    res.send(err);
   
  }); 

})

router.get('/services',function(req,res){

  
 FederalService.find({},
  function(err,service){
    if(err)
      res.send(err)
    else
      res.send(service)
  });
 
 
})

router.get('/categories',function(req,res){
  CategoryServices.find({},
    function(err,service){
      if(err)
        res.send(err)
      else
        res.send(service)
    });
})

router.post('/addCategory',function(req,res){
  var newCategory = new CategoryServices({
    Name : req.body.Name
  })
 
  newCategory.save().then((doc) => {
    console.log("Category added successfully.", doc);
    res.send(doc);
  }, (err) => {
    console.log("Unable to add category.", err);
    res.send(err);
   
  }); 
})

router.get('/services/:location',function(req,res){

  
  FederalService.find({
    Location : req.params.location
  },
   function(err,service){
     if(err)
       res.send(err)
     else
       res.send(service)
   });
  
  
 })


 router.get('/services/categories/:category',function(req,res){

  console.log("Category Service "+req.params.category)
  
  FederalService.find({
    Category : req.params.category
  },
   function(err,service){
     console.log("Category Service "+service)
     if(err)
       res.send(err)
     else
       res.send(service)
   });
  
  
 })

module.exports = router;