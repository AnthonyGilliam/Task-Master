import React, { Component } from 'react'
// import { Container, Row, Col, Button } from "react-bootstrap";
import logo from '../logo.jpg'

class NavBar extends Component{

  render(){
    return(
      <div>
        <header>
          <h1>Task Master</h1>
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
      </div>
    )
  }

}

export default NavBar;
