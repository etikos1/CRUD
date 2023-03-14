import React from 'react'
//import {Route, BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
//import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './user/Home'
import Signin from './auth/Signin'
import Signup from './user/Signup'
import Profile from './user/Profile'
import Users from './user/Users'
import Editprofile from './user/Editprofile'

import Privateroute from './auth/Privateroute'


const Router = () => {
    return (<div>
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/signin" component={Signin}/>
        <Privateroute path="/user/edit/:userId" component={Editprofile}/>
        <Route path="/user/:userId" component={Profile}/>
      
      </Switch>
    </div>)
}

export default Router