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


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
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


  signInFaculty = event => {
    event.preventDefault();

    //Creating data to be sent
    var data = {
      password : this.state.password,
      name : this.state.name
    }

    axios.defaults.withCredentials = true;
    axios.post('http://localhost:9000/FacultySignIn', JSON.stringify(data))
    .then(res => {
      var resultData = res.data[0];

      console.log("Inside Login" + resultData);
      if(res.data[0]){
        console.log("Correct Login");
      localStorage.setItem('token', resultData.x);
      localStorage.setItem('name' , resultData.name);
      localStorage.setItem('userType' , resultData.userType);
      this.setState({
        authFlag : true
    }) 
    this.props.history.push('/home/courses') }  else {
      if(res.status === 200){
        console.log("Invaid Login");
        this.setState({
            authFlag : false,
            errorMessage : "Invalid Login",
            email: "",
            password: "",
            name : "",
        })
      }
    }
     
    });
  
  }

  signInStudent = event => {
    event.preventDefault();

    //Creating data to be sent
    var data = {
      password : this.state.password,
      name : this.state.name
    }

    axios.defaults.withCredentials = true;
    axios.post('http://localhost:9000/StudentSignIn', JSON.stringify(data))
    .then(res => {
      var resultData = res.data[0];

      console.log("Inside Login" + resultData);
      if(res.data[0]){
        console.log("Correct Login");
      localStorage.setItem('token', resultData.x);
      localStorage.setItem('name' , resultData.name);
      localStorage.setItem('userType' , resultData.userType);
      this.setState({
        authFlag : true
    }) 
    this.props.history.push('/home/courses') }  else {
      if(res.status === 200){
        console.log("Invaid Login");
        this.setState({
            authFlag : false,
            errorMessage : "Invalid Login",
            email: "",
            password: "",
            name : "",
        })
      }
    }
     
    });
  
  }


  render(){
   
    return (
      <div className = "Fullpage">
      <div className ="LoginPage" align = "center" >
      <div className="Login">
        <form  align= "center" style={{marginTop : "100"}}>
        <Form.Group controlId="name" >
            <Form.Control
              value={this.state.name}
              placeholder = "Name"
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
            Sign In As User
          </Button>
          <Button
            block
            
            //disabled={!this.validateForm()}
            onClick = {this.signInFaculty}
            type="button"
          >
            Sign In As Admin
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