import React, {Component} from 'react';
import './UserPage.css';
import {Redirect} from 'react-router';
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';
import axios from 'axios';
import {ROOT_URL} from '../../URLSettings';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';




 

var randomColor = require('randomcolor');


export default class HomeCourses extends Component {
    constructor(){
        super();
        this.state = {  
            name : localStorage.getItem('name'),
            userType : localStorage.getItem('userType'),
            token : localStorage.getItem('token'),
           // courses : [],
            services : []
        }
     //   this.searchCourses = this.searchCourses.bind(this);
    }  

    
   
    componentDidMount(){

      
        console.log("Mounting");
        axios.get(`${ROOT_URL}/categories`)
        .then((response)=>{
        console.log(response);
            this.setState({
                services: response.data
            })
            console.log(this.state.services);
        });
    
    }

    searchCourseValue = event => {
      
    }

    openService = event => {
        console.log(event)
        console.log(event.target.id)
        this.props.history.push(`/service/${event.target.id}`);
       
    }

    addCategory = (event) => {
        let path = `newCategory`;
        this.props.history.push(path);
    }
   
    render(){

        var card = this.state.services.map(data => {

            return (<div class = "col-sm-3">
            <div class="card" id={data.name} onClick= {this.openService} style = {{width :302 ,marginLeft: 5, marginRight : 5,height: 202, marginTop : 5, marginBottom : 5}}>
            <div class="card-body" id={data.name}  onClick= {this.openService} style = {{backgroundColor : randomColor(), height : 130}}>
            <i class="fas fa-home"></i>
            </div>
            <h4 class="card-subtitle md-2 py-3 text-muted" style= {{height : 50}}> <b>{data.name} </b></h4>
            <p class="card-text"> </p>
            </div>
            </div> )

        })
       return (
           <div class="category">
                {card}
           
            {/* <div class = "col-sm-3">
            <div class="card" onClick= {this.openService} style = {{width :302 ,marginLeft: 5, marginRight : 5,height: 202, marginTop : 5, marginBottom : 5}}>
            <div class="card-body"   onClick= {this.openService} style = {{backgroundColor : randomColor(), height : 130}}>
            <i class="fas fa-home"></i>
            </div>
            <h4 class="card-subtitle md-2 py-3 text-muted" style= {{height : 50}}> <b>Add a new category </b></h4>
            
            </div>
            </div> */}
            <Button type="button" class="categoryButton" onClick={this.addCategory}>Add a new Category</Button>
            </div>
       );
}
}



