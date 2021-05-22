import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Home,Login,ForgotPassword,NewPassword,Register,Dashboard} from './pages'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 


const routing = (
  <Router>
     <Switch>
        <Route exact path="/" component = {Home}/> 
        <Route path='/login' component={Login}/> 
        <Route path='/forgotpassword' component={ForgotPassword}/> 
        <Route path='/newpassword' component={NewPassword}/> 
        <Route path='/register' component={Register}/> 
        <Route path='/dashboard' component={Dashboard}/> 
      </Switch>
  </Router>
)


const rootElement:any = document.getElementById('root')
if(rootElement.hasChildNodes()){
    ReactDOM.hydrate(routing,rootElement)
} else{
    ReactDOM.render(routing,rootElement)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
