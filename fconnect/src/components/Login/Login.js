import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
import './Login.css';
//import Bootstrap from "react-bootstrap";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Background from '../../images/Background.jpg';
import Navbarhome from "../NavBar/Navbarhome";

//import ROOT_URL from '../../URLSettings';
import {ROOT_URL} from '../../URLSettings';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      name : "",
      authFlag : false,
      errorMessage : ""
    };
  }

  validateForm() {
    return  this.state.password.length > 0 && this.state.name.length >0;
  }

  componentWillMount(){
    this.setState({
        authFlag : false
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  signInStudent = event => {
    event.preventDefault();

    //Creating data to be sent
    var data = {
      password : this.state.password,
      email : this.state.name
    }

    axios.defaults.withCredentials = true;
    axios.post(`${ROOT_URL}/users/login`, data)
    .then(res => {
      console.log(res.status +  "Resulyt bkwsde");
     // var resultData = res.data[0];
      if(res.status === 200){
     
        console.log("Correct Login");
        console.log(res);
      //localStorage.setItem('token', resultData.x);
      localStorage.setItem('name' , res.data.email);
      localStorage.setItem('userType' , res.data.role);
      this.setState({
        authFlag : true
    }) 
    this.props.history.push('/userPage') }  else {
     
        console.log("Invaid Login");
        this.setState({
            authFlag : false,
            errorMessage : "Invalid Login",
        
            password: "",
            name : "",
        })
      }
    
     
    });
  
  }

  
     


  render(){
   
    return (
      <div className = "Fullpage">
      <div className ="LoginPage" align = "center" >
      <div className="Login">
     <div>
       <h2> Welcome to F-Connect </h2>
      </div>
        <form  align= "center" style={{marginTop : 300}}>

        <Form.Group controlId="name" >
            <Form.Control
              value={this.state.name}
              placeholder = "Email"
              onChange={this.handleChange}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="password" >
            <Form.Control
            placeholder = "Password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </Form.Group>
          
          
          <Button
            block
           
            //disabled={!this.validateForm()}
            onClick = {this.signInStudent}
            type="button"
          >
            Sign In 
          </Button>
         
          Not a Member?  <Link to="/signup">Signup</Link>
          <p>  {this.state.errorMessage}</p>
        </form>
      </div>
      </div>
      </div>
    );
  }
}