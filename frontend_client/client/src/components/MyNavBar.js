import React, { useContext, useEffect } from 'react';
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
import RegistrationForm from './RegistrationForm';

function MyNavBar(props) { 
  const [isVisibilityFrame,setIsVisibilityFrame] = useState(false) // переделать
  
  // const[token,setToken] = useState(useContext(AuthContext))
  const[token,setToken] = useState(localStorage.getItem("token"))
  const[username,setUsername] = useState(localStorage.getItem("username"))

  const handleSetIsVisibilityFrame = (isBoolean) => setIsVisibilityFrame(isBoolean);
  const handleSetToken = (newToken) => {
    localStorage.setItem("token",newToken)
    setToken(newToken)
    
    console.log(localStorage.getItem("token"))
    // console.log(new Connection().getUsers(localStorage.getItem("token")))


    //const decoded = jwtDecode(token);
    // console.log("sub " + decoded.sub);
    // console.log(decoded.roles[0])

    // setUsername(decoded.sub);

  }

  
  
  // useEffect( ()=>{ console.log('MyNavBar -> useEffect') },[token] )

  // registration
  const [isVisibilityFrameRegistration,setIsVisibilityFrameRegistration] = useState(false)
  const handleSetIsVisibilityFrameRegistration = (isBoolean) => { setIsVisibilityFrameRegistration(isBoolean); }

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
                  <Button onClick={() => setToken("")} variant = 'outline-primary' className='me-2'>Log Out</Button>
                  <Button variant = 'outline-info' className='me-2'>{username}</Button>
                </>
              : <>
                <Button onClick={() => handleSetIsVisibilityFrame(true)} variant = 'primary' className='me-2'>Log In</Button>
                <Button onClick={() => handleSetIsVisibilityFrameRegistration(true)} variant = 'primary' className='me-2'>Registration</Button>
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
          //setUsername = {setUsername}
        ></LogInForm>

        <RegistrationForm
          isVisibilityFrameRegistration = {isVisibilityFrameRegistration}
          setIsVisibilityFrameRegistration = {setIsVisibilityFrameRegistration} // more simple
        ></RegistrationForm>
        
      </>
  );
}

export default MyNavBar;