import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {ROOT_URL} from '../../URLSettings';
import {Redirect} from 'react-router';

import './ServicePage.css'
import Button from 'react-bootstrap/Button';

export default class StateServices extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params.id);

        this.state = {
            name : localStorage.getItem('name'),
            userType : localStorage.getItem('userType'),
            courseId : this.props.match.params.id,
            services : []
        }
    }


    componentDidMount(){
        console.log("Mounting");
        console.log(this.props.match.params.id);
        axios.get(`${ROOT_URL}/services/${this.props.match.params.id}`)
            .then((response)=>{
                console.log(response);
                this.setState({
                    services: response.data
                })
                console.log(this.state.services);
            });

    }

    deleteItem(e)
    {
        var data = {
            id : e.target.id
        }
        axios.post(`${ROOT_URL}/deleteService`, data)
            .then(res => {
                console.log("In Admin Page")
                this.componentDidMount();
            });
        console.log(e.target.id + "Deleting");

    }
    render() {
        let loggedIn = (localStorage.getItem("name") === null);
        if (loggedIn) {
            return (<Redirect to='/'/>);
        }
        else {
            var services = this.state.services.map(data => {
                    return (
                        <div>
                            <div key={data.URL} class="card">
                                {/* <div class="card-body" style = {{ height : 130}}>
                    </div> */}
                                <h2 class="cardName">{data.Name}</h2>
                                <h6 class="card-subtitle mb-2 text-muted cardName" style={{height: 50}}>
                                    <p> {data.Description} </p></h6>
                                <p class="card-text cardName"><a href={data.URL}> {data.URL} </a></p>
                                {this.state.userType === "mentor" ?
                                    <div><Link to={`/serviceDetails/${data._id}`}> Edit Service </Link>
                                        <button id={data._id} onClick={(e) => {
                                            if (window.confirm('Are you sure you wish to delete this item?')) this.deleteItem(e)
                                        }}>
                                            Delete
                                        </button>
                                    </div> : ""}


                            </div>
                        </div>
                    )
                }
            )
            return (
                <div class="ServicePage" style={{marginTop: 100}}>
                    {/* <p> <b> {this.state.courseId} Links </b></p> */}
                    <h2> Services available in {this.props.match.params.id} </h2>
                    {services}
                </div>
            );
        }
    }
}

