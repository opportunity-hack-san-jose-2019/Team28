import React, { Component } from 'react';
import './Navbarhome.css';
import cookie from "react-cookies";
import Link from "react-router-dom/es/Link";
import logo from "../../images/connect.png"
import Redirect from "react-router-dom/es/Redirect";
import {States} from "../../URLSettings";


    class Navbarhome extends Component {

    constructor(props)
    {
        
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout = (e) =>
    {
        localStorage.removeItem("name");
        localStorage.removeItem("userName");
        localStorage.removeItem("userType");
        this.props.history.push("/");
    }

    render() {

        let loggedIn = (localStorage.getItem("name") === null);
        let isAdmin = (localStorage.getItem("userType") === "mentor");
        let user =   localStorage.getItem("name");
        let states = States.map( data => {
            return (

                   <a className="dropdown-item" href={`/stateServices/${data}`}> {data} </a>

            )
        })

        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">

                <a className="navbar-brand" href="/">
                    <img src={logo} style={{width : "300px" , height : "50px"}} alt="Logo"/>
                </a>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item btn-link">
                            <a className="nav-link"><Link to={"/contact" }> Contact Us <span className="sr-only">current</span></Link></a>
                        </li>
                        

                        {!loggedIn ? <li className="nav-item btn-link">
                            <a className="nav-link"><Link to={"/userPage" }> Home <span className="sr-only">current</span></Link></a>
                            </li> : ""}
                        { isAdmin ? <li className="nav-item btn-link">
                            <a className="nav-link"> <Link to={"/addService" }> Add Service <span className="sr-only">current</span></Link></a>
                        </li>
                        : ""}
                          { isAdmin ? <li className="nav-item btn-link">
                                            <a className="nav-link"> <Link to={"/viewServices" }> My Services <span className="sr-only">current</span></Link></a>
                        </li>
                        : ""}
                        <li className="nav-item btn-link">
                            <a className="nav-link" href="/#about"> About Us <span className="sr-only">current</span></a>
                        </li>
                        <li className="nav-item btn-link">
                            <a className="nav-link" href="/#about"> Blogs <span className="sr-only">current</span></a>
                        </li>
                        

                        {!loggedIn ?
                        (
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    States
                                </a>
                                <div className="dropdown-menu">
                                    {states}
                                </div>
                            </li>
                        )
                        : ""}
                        {!loggedIn ? (
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  {localStorage.getItem("userName")}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" ><Link to="/" onClick={this.logout}>Logout</Link></a>
                                </div>
                            </li>
                        ) :""
                        }
                        {loggedIn ?  <li className="nav-item btn-link">
                        <a className="nav-link"><Link to={"/login" }> Login <span className="sr-only">current</span></Link></a>
                    </li> : "" }


                            
                       
                    </ul>
                </div>
            </nav>
                )
    }
}

export default Navbarhome;