import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import cookie from 'react-cookies';
import {Link, Redirect} from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import GoogleLogin from "react-google-login";
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
      localStorage.setItem('userName' , res.data.username);
      this.setState({
        authFlag : true
    }) 
    this.props.history.push('/userPage')
    }
    else {
     
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

  
     


  render() {
      let loggedIn = (localStorage.getItem("name") === null);
      if (!loggedIn) {
          return (<Redirect to='/userPage'/>);
      }
      else {

          const responseGoogle = (response) => {
              var data = {
                  email: response.profileObj.email,
                  username: response.profileObj.name
              }
              console.log(response.profileObj);
              console.log('data:' + data);

              axios.defaults.withCredentials = true;
              axios.post(`${ROOT_URL}/users/signupWithGoogle`, data)
                  .then(res => {
                      console.log(res.status + "Resulyt bkwsde");
                      // var resultData = res.data[0];
                      if (res.status === 200) {

                          console.log("Correct Login");
                          //localStorage.setItem('token', resultData.x);
                          localStorage.setItem('name' , res.data.email);
                          localStorage.setItem('userType' , "user");
                          localStorage.setItem('userName' , res.data.username);
                          this.setState({
                              authFlag: true
                          })
                          this.props.history.push('/userPage')
                      }
                      else {

                          console.log("Invaid Login");
                          this.setState({
                              authFlag: false,
                              errorMessage: "Invalid Login",

                              password: "",
                              name: "",
                          })
                      }
                  });
          }

          const failureGoogle = (response) => {
              alert("Login using Google Failed. Please check console for more details.");
              console.log(response);
          }

          return (
              <div className="Fullpage">
                  <div className="LoginPage" align="center">
                      <div className="Login">
                          <div>
                              <h2> Welcome to F-Connect </h2>
                          </div>
                          <form align="center">

                              <Form.Group controlId="name">
                                  <Form.Control
                                      value={this.state.name}
                                      placeholder="Email"
                                      onChange={this.handleChange}
                                      type="text"
                                  />
                              </Form.Group>
                              <Form.Group controlId="password">
                                  <Form.Control
                                      placeholder="Password"
                                      value={this.state.password}
                                      onChange={this.handleChange}
                                      type="password"
                                  />
                              </Form.Group>


                              <Button
                                  block

                                  //disabled={!this.validateForm()}
                                  onClick={this.signInStudent}
                                  type="button"
                              >
                                  Sign In
                              </Button>

                              Not a Member? <Link to="/signup">Signup</Link>
                              <p>  {this.state.errorMessage}</p>

                              <br/>
                              <br/>

                              <GoogleLogin
                                  clientId="309202928063-nqs6chp8a40e41dgmom5rh3dimg8akcd.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                                  buttonText="LOGIN WITH GOOGLE"
                                  onSuccess={responseGoogle}
                                  onFailure={failureGoogle}
                              />
                          </form>
                      </div>
                  </div>
              </div>
          );
      }
  }
}