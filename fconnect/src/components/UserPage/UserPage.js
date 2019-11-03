import React, {Component} from 'react';
import './UserPage.css';
import {Redirect} from 'react-router';
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';

 

var randomColor = require('randomcolor');


export default class HomeCourses extends Component {
    constructor(){
        super();
        this.state = {  
            name : localStorage.getItem('name'),
            userType : localStorage.getItem('userType'),
            token : localStorage.getItem('token'),
            courses : [],
            search :''
        }
     //   this.searchCourses = this.searchCourses.bind(this);
    }  

    
   
    componentDidMount(){

      
     
    }

    searchCourseValue = event => {
      
    }

    openService = event => {
        console.log(event)
        console.log(event.target.id)
        this.props.history.push(`/service/${event.target.id}`);
       
    }

   
    render(){
       return (
           <div class="category">
           <div class = "row">
           <div class = "col-sm-3">
        <div class="card" id="Housing Services" onClick= {this.openService} style = {{width :302 ,marginLeft: 5, marginRight : 5,height: 202, marginTop : 5, marginBottom : 5}}>
   <div class="card-body" id="Housing Services"  onClick= {this.openService} style = {{backgroundColor : randomColor(), height : 130}}>
   <i class="fas fa-home"></i>
  </div>
  <h4 class="card-subtitle md-2 py-3 text-muted" style= {{height : 50}}> <b>Housing Services </b></h4>
    <p class="card-text"> </p>
  
   
    </div>
    </div>
    <div class = "col-sm-3">
<div class="card" style = {{width :302 ,marginLeft: 5, marginRight : 5,height: 202, marginTop : 5, marginBottom : 5}}>
<div class="card-body" style = {{backgroundColor : randomColor(), height : 130}}>
</div>
<h6 class="card-subtitle mb-2 text-muted" style= {{height : 50}}>Medical Services</h6>
 <p class="card-text"> </p>
</div>
 </div>

 <div class = "col-sm-3">
        <div class="card" style = {{width :302 ,marginLeft: 5, marginRight : 5,height: 202, marginTop : 5, marginBottom : 5}}>
   <div class="card-body" style = {{backgroundColor : randomColor(), height : 130}}>
  </div>
  <h6 class="card-subtitle mb-2 text-muted" style= {{height : 50}}>Financial Services</h6>
    <p class="card-text"> </p>
  
   
    </div>
    </div>
    <div class = "col-sm-3">
        <div class="card" style = {{width :302 ,marginLeft: 5, marginRight : 5,height: 202, marginTop : 5, marginBottom : 5}}>
   <div class="card-body" style = {{backgroundColor : randomColor(), height : 130}}>
  </div>
  <h6 class="card-subtitle mb-2 text-muted" style= {{height : 50}}>College tuition Services</h6>
    <p class="card-text"> </p>
  
   
    </div>
    </div>
    <div class = "col-sm-3">
        <div class="card" style = {{width :302 ,marginLeft: 5, marginRight : 5,height: 202, marginTop : 5, marginBottom : 5}}>
   <div class="card-body" style = {{backgroundColor : randomColor(), height : 130}}>
  </div>
  <h6 class="card-subtitle mb-2 text-muted " style= {{height : 50}}>Mentoring Services</h6>
    <p class="card-text"> </p>
  
   
    </div>
    </div>
    <div class = "col-sm-3">
        <div class="card" style = {{width :302 ,marginLeft: 5, marginRight : 5,height: 202, marginTop : 5, marginBottom : 5}}>
   <div class="card-body" style = {{backgroundColor : randomColor(), height : 200}}>
   <i class="fas fa-home"></i>


  </div>
  <h6 class="card-subtitle mb-2 text-muted" style= {{height : 50}}>Housing</h6>
    <p class="card-text"> </p>
  
   
    </div>
    </div>
 </div>
 </div>
       );
}
}



