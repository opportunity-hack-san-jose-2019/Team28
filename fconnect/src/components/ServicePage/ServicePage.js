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
    
        this.setState({
            services: response.data
        })
      
    });

    console.log(this.state.services);
      
     
}
  
  render() {
      var services = this.state.services.map( data => {
      return  <a href={data.URL}> </a>
      }
      )
    return(
        <div>
{services}
</div>
    );
   
    
  }
}

