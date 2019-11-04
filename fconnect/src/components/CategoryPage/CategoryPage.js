import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {ROOT_URL} from '../../URLSettings';
import './CategoryPage.css'
import {Redirect} from "react-router-dom";


export default class CategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          category: "",
    
        };
      }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    addCategory = event => {
        var data = {
            "name" : this.state.category
        }
        axios.defaults.withCredentials = true;
        axios.post(`${ROOT_URL}/addCategory`, data)
        .then(res => {
      
        this.props.history.push('/userPage');
        });
    }
    render() {
        let isAdmin = (localStorage.getItem("userType") === "admin");
        if (!isAdmin) {
            return (<Redirect to='/'/>);
        }
        else {

            return (
                <div class="formClass">
                    <Form.Group controlId="category">
                        <Form.Control
                            value={this.state.category}
                            placeholder="Add a new Category"
                            onChange={this.handleChange}
                            type="text"
                        />
                    </Form.Group>
                    <Button type="button" class="categoryButton" onClick={this.addCategory}>Add a new Category</Button>

                </div>
            )

        }
    }

}