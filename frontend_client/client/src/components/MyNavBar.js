import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import LogInForm from './LogInForm';
import img from '../images/rubik.jpg'
import { AuthContext } from '../context/AuthContext';
import { Connection } from '../connection/Connection';

import { jwtDecode } from "jwt-decode";

function MyNavBar(props) { 
  const [isVisibilityFrame,setIsVisibilityFrame] = useState(false)
  const[token,setToken] = useState(useContext(AuthContext))
  const[username,setUsername] = useState("")

  const handleSetIsVisibilityFrame = (isBoolean) => setIsVisibilityFrame(isBoolean);
  const handleSetToken = (newToken) => {
    localStorage.setItem("token",newToken)
    setToken(newToken)
    
    // console.log(localStorage.getItem("token"))
    // console.log(new Connection().getUsers(localStorage.getItem("token")))

    const decoded = jwtDecode(token);
    console.log("sub " + decoded.sub);
    console.log(decoded.roles[0])

    setUsername(decoded.sub);
  } 

  return (
      <>
        <Navbar collapseOnSelect expand="lg" bg = "dark" variant='dark'>
          <Container>
            <Navbar.Brand href="/"><img src={img} alt='cl' width={30} height={30}/>  Clinic</Navbar.Brand>
            {/* <Navbar.Brand href="/"> <Image1/> Clinic</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About as</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
          </Nav>
          <Nav>
            {
              token!=""
              ? <>
                  <Button onClick={() => handleSetToken("")} variant = 'outline-primary' className='me-2'>Log Out</Button>
                  <Button onClick={() => handleSetToken("")} variant = 'outline-info' className='me-2'>{username}</Button>
                </>
              : <>
                <Button onClick={() => handleSetIsVisibilityFrame(true)} variant = 'primary' className='me-2'>Log In</Button>
                <Button variant = 'primary' className='me-2'>Registration</Button>
              </>
            }
            
          </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>

        <LogInForm 
          isVisibilityFrame = {isVisibilityFrame}
          handleSetIsVisibilityFrame = {handleSetIsVisibilityFrame}
          handleSetToken = {handleSetToken}
        ></LogInForm>
        
      </>
  );
}

export default MyNavBar;