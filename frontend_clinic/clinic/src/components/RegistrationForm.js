import React from 'react';
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const RegistrationForm = () => {

    return (
      <>
      
        <Modal show={props.isVisibilityFrame} onHide={handleClose}>
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
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleLogin}>
              Log In
            </Button>
          </Modal.Footer>
        </Modal>
      </>  
    );
};

export default RegistrationForm;