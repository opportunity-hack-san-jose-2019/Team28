import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import LoginPage from './Login/Login';
import signUp from './Signup/Signup';
import landingPage from './LandingPage/LandingPage';
import Navbarhome from "./NavBar/Navbarhome";

import userPage from './UserPage/UserPage';
import adminPage from './AdminPage/AdminPage';



//Create a Main Component
class Main extends Component {
    render(){
        return(
            <BrowserRouter>
            <div>
                {/*Render Different Component based on Route*/}
                <Route path="/" component={Navbarhome} />
                <Route exact path="/login"   component={LoginPage}/>
                <Route exact path="/"   component={landingPage}/>
                <Route exact path="/signUp" component={signUp} />
                <Route path="/userPage" component={userPage} />
                <Route path="/adminPage" component={adminPage} />

            </div>
            </BrowserRouter>
        )
    }
}
//Export The Main Component
export default Main;