import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import LoginPage from './Login/Login';
import signUp from './Signup/Signup';
import landingPage from './LandingPage/LandingPage';
import Navbarhome from "./NavBar/Navbarhome";

import userPage from './UserPage/UserPage';
import adminPage from './AdminPage/AdminPage';
import servicePage from './ServicePage/ServicePage';
import stateServices from './ServicePage/StateServices';
import editservicePage from './ServicePage/EditService';
import viewMyServices from './AdminPage/ViewServices';
import CategoryPage from './CategoryPage/CategoryPage'



//Create a Main Component
class Main extends Component {
    render(){
        return(
            <BrowserRouter>
            <div>
                {/*Render Different Component based on Route*/}
                <Route path="/" component={Navbarhome} />
                <Route path="/login"  exact component={LoginPage}/>
                <Route path="/"  exact component={landingPage}/>
                <Route path="/signUp" component={signUp}></Route>
                <Route path="/userPage" component={userPage}></Route>
                <Route path="/addService" component={adminPage}></Route> 
                <Route path="/service/:id" component={servicePage}></Route>
                <Route path="/serviceDetails/:id" component={editservicePage}></Route>
                <Route path="/serviceDelete/:id" component={servicePage}></Route>

                <Route exact path="/stateServices/:id" component={stateServices}></Route>
                <Route path="/viewServices" component={viewMyServices}></Route>
                <Route path="/newCategory" component={CategoryPage}></Route>

            </div>
            </BrowserRouter>
        )
    }
}
//Export The Main Component
export default Main;