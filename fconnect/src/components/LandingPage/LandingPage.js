
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../../images/Logo.png"
import Navbarhome from "../NavBar/Navbarhome";
import {Route} from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    return (
        <div>
              <Carousel showThumbs={false} infiniteLoop={true}>
                <div style={{ height: "700px", color: "#fff" }}>this is slide 1</div>
                <div style={{ height: "700px", color: "#fff" }}>this is slide 2</div>
                <div style={{ height: "700px", color: "#fff" }}>this is slide 3</div>
              </Carousel>
      </div>
    );
  }
}
















