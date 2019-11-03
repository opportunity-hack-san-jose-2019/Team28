import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Redirect} from 'react-router';


 export default class ServicePage extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      name : localStorage.getItem('name'),
      userType : localStorage.getItem('userType'),
      courseId : localStorage.getItem('course'),
      quizzes : ""
    }
  }

  componentDidMount(){
  
  }

  render() {
    return(
<p> "This is a service"</p>
    );
   
    
  }
}

