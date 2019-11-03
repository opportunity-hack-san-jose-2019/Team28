import React, { Component } from 'react';
import './Navbarhome.css';
import cookie from "react-cookies";
import Link from "react-router-dom/es/Link";
import logo from "../../images/connect.png"
import flag from "../../images/american-flag-vector-icon.jpg";


    class Navbarhome extends Component {

    constructor(props)
    {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout = (e) =>
    {
        cookie.remove('cookie', { path: '/' });
        cookie.remove('userid', { path: '/' });
    }

    render() {

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
                        <li className="nav-item btn-link">
                            <a className="nav-link"><Link to={"/about" }> About Us <span className="sr-only">current</span></Link></a>
                        </li>
                        <li className="nav-item btn-link">
                            <a className="nav-link"><Link to={"/blogs" }> Blogs <span className="sr-only">current</span></Link></a>
                        </li>
                        <li className="nav-item btn-link">
                            <a className="nav-link"><Link to={"/login" }> Login <span className="sr-only">current</span></Link></a>
                        </li>

                        {(cookie.load('cookie') === 'owner') &&
                        (<div>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    States
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Link 1</a>
                                    <a className="dropdown-item" href="#">Link 2</a>
                                    <a className="dropdown-item" href="#">Link 3</a>
                                </div>
                            </li>
                             <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {cookie.load('username')}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" ><Link to={"/profile/" + cookie.load('userid') }>Profile</Link></a>
                                    <a className="dropdown-item" ><Link to="/" onClick={this.logout}>Logout</Link></a>
                                </div>
                            </li>
                        </div>)
                        }
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Navbarhome;