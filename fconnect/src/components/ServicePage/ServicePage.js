import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {ROOT_URL} from '../../URLSettings';
import {Redirect} from 'react-router';


 export default class ServicePage extends Component {
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
    console.log(this.state.courseId);
    axios.get(`${ROOT_URL}/services/categories/${this.state.courseId}`)
    .then((response)=>{
    console.log(response);
        this.setState({
            services: response.data
        })
        console.log(this.state.services);
    });

}
  
  render() {
      var services = this.state.services.map( data => {
        return (  <div > 

<div class="card" style = {{width :302 ,marginLeft: 5, marginRight : 5,height: 202, marginTop : 5, marginBottom : 5}}>
<div class="card-body" style = {{ height : 130}}>
</div>
<h6 class="card-subtitle mb-2 text-muted" style= {{height : 50}}> <p> {data.Description} </p> </h6>
 <p class="card-text"> <a href={data.URL}> {data.URL} </a> </p>
</div>

             
              
               
          </div>
        )
      }
      )
    return(
        <div class="ServicePage" style={{marginTop : 100}}>
          
            <p> <b> {this.state.courseId} Links </b></p>
        {services}
</div>
    );
   
    
  }
}

