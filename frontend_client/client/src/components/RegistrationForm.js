import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

const RegistrationForm = (props) => {

  const url = 'http://localhost:8082/registration'
  const [login,setLogin] = useState("")
  const [password,setPassword] = useState("")

  const changeLogin = (e) => {
    setLogin(e.target.value) 
  }
  const changePassword = (e) => {
    setPassword(e.target.value) 
  }

  const handleRegistration = (e) => {
      e.preventDefault();

      var data = JSON.stringify({
        "login": login,
        "password": password
      });

      var config = {
        method: 'post',
        url: url,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        props.setIsVisibilityFrameRegistration(false)
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    return (
      <>
      
        <Modal show={props.isVisibilityFrameRegistration} onHide={()=>props.handleSetIsVisibilityFrameRegistration(false)}>  // упростить
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
  
              <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Login</Form.Label>
                <Form.Control onChange={changeLogin}
                  type="text"
                  placeholder="Enter your login"
                  autoFocus
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={changePassword}
                  type="password"
                  placeholder="Enter your password"
                  autoFocus
                />
              </Form.Group>
  
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>props.setIsVisibilityFrameRegistration(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleRegistration}>
              Registration
            </Button>
          </Modal.Footer>
        </Modal>
      </>  
    );
};

export default RegistrationForm;