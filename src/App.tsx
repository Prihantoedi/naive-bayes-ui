import React, {SyntheticEvent, useState} from 'react';
import About from './components/About';
import Home from './components/Home';
import Train from './components/Train';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';


function App() {
  

  return (
    <>
    
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/train' component={Train}></Route>
        </Switch>
        
        {/* <Navbar/> */}
      </Router>
       


      
       
      
    </>
    

    
   
  );
}

export default App;
