
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../../images/Logo.png"

export default class LandingPage extends Component {
  render() {
    return (<div>
        
        <div style={{height: "100px"}}>
        

        <ul class="nav justify-content-center" >
<img style={{width : "150px" , height : "100px"}}src={logo}/> 
<li class="nav-item">

  </li>
  <li class="nav-item" style = {{marginLeft : "400px"
        }}>
    <a class="nav-link active" href="/login">CONTACT US</a>
  </li>
  <li class="nav-item" >
    <a class="nav-link" href="/login">ABOUT US</a>
  </li>
  <li class="nav-item" >
    <a class="nav-link" href="/login">LOGIN</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/login">BLOGS</a>
  </li>
 
</ul>
</div>

     { /*  <a style={{    marginLeft: "700px"
}}class="nav-link active" href="/login"> <h3> CONTACT US </h3></a>
       <a style={{    marginLeft: "9000px"
}}class="nav-link active" href="/login"> <h3> ABOUT US </h3></a>
        <a style={{    marginLeft: "1100px"
}}class="nav-link active" href="/login"> <h3> LOGIN </h3></a>
</div> */}
      <Carousel showThumbs={false} infiniteLoop={true}>
        <div style={{ height: "700px", color: "#fff" }}>this is slide 1</div>
        <div style={{ height: "700px", color: "#fff" }}>this is slide 2</div>
        <div style={{ height: "700px", color: "#fff" }}>this is slide 3</div>
      </Carousel>
      </div>
    );
  }
}
















