import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import cookie from 'react-cookies';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {ROOT_URL} from '../../URLSettings';



export default class EditService extends Component {
    constructor(props) {


        super(props);
        console.log(this.props.match.params.id);
        this.state = {
            email: localStorage.getItem("name"),
            password: "",
            name: "",
            about: "",
            city: "",
            country: "",
            company: "",
            school: "",
            hometown: "",
            languages: "",
            gender: "",
            userType: "",
            categories: [],

            serviceId: this.props.match.params.id,
            serviceName: "",
            location: "",
            description: "",
            url: "",
            category: "",


        };
    }

    //Profile Image, Name, Email, Phone Number, About Me,City, Country, Company, School, Hometown, Languages, Gender

    validateForm() {
        return this.state.serviceName.length > 0 && this.state.description.length > 0 && this.state.location.length > 0 && this.state.category.length > 0 && this.state.url.length > 0
    }

    componentWillMount() {
        this.setState({
            authFlag: false
        })
    }

    componentDidMount() {
        axios.get(`${ROOT_URL}/getService/${this.props.match.params.id}`)
            .then(res => {
                console.log("Rekhdn,emnf" + res.data[0].Name)
                this.setState({
                    serviceName: res.data[0].Name,
                    location: res.data[0].Location,
                    description: res.data[0].Description,
                    url: res.data[0].URL,
                    category: res.data[0].Category,
                    serviceId: res.data[0]._id,
                    categories: res.data
                })

            })
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }


    setGender(event) {
        console.log(event.target.value);
        var value = event.target.value;
        this.setState({
            gender1: value
        });
    }


    setUserType(event) {
        console.log(event.target.value);
        var value = event.target.value;
        this.setState({
            userType: value
        });
    }


    signUpStudent = event => {
        console.log("Clicked Edit Service")
        event.preventDefault();
        var data = {
            Name: this.state.serviceName,
            Location: this.state.location,
            Description: this.state.description,
            URL: this.state.url,
            Category: this.state.category,
            Email: this.state.email,
            serviceId: this.state.serviceId

        }
        console.log(data + "Modified Service Data");


        axios.post(`${ROOT_URL}/updateService`, data)
            .then(res => {
                console.log("In Admin Page")
                this.props.history.push('/viewServices');
            });

    }


    render() {
        let loggedIn = (localStorage.getItem("name") === null);
        if (loggedIn) {
            return (<Redirect to='/'/>);
        }
        else {

            return (
                <div className = "LoginPage - Component">

                    <div className="Login">
                        <div>
                            <h2 align = "center">Edit an Existing Service</h2>
                        </div>
                        <form  align= "center">




                            <Form.Group controlId="serviceName" >
                                <Form.Label>Service Name</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="serviceName"
                                    value={this.state.serviceName}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="location" >
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    value={this.state.location}
                                    onChange={this.handleChange}
                                    type="location"
                                />
                            </Form.Group>
                            <Form.Group controlId="description" >
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                    type="text"
                                />
                            </Form.Group>

                            <Form.Group controlId="url" >
                                <Form.Label>URL</Form.Label>
                                <Form.Control
                                    value={this.state.url}
                                    onChange={this.handleChange}
                                    type="text"
                                />
                            </Form.Group>

                            <fieldset>

                            </fieldset>

                            <Button
                                block
                                disabled={!this.validateForm()}
                                type="button"  onClick = {this.signUpStudent}
                            >
                                Edit an existing service
                            </Button>


                        </form>
                    </div>
                </div>
            );
        }
    }
}