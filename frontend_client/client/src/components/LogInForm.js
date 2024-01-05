import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios'

const LogInForm = (props) => {
  
  //----------------
  const url = 'http://localhost:8082/auth'
  const [login,setLogin] = useState("")
  const [password,setPassword] = useState("")

  // useEffect( ()=>{
  //   console.log("init")
  // },[login]);

  const changeLogin = (e) => {
    setLogin(e.target.value) 
  }
  const changePassword = (e) => {
    setPassword(e.target.value) 
  }
  const handleLogin = (e) => {
    e.preventDefault();

    console.log(login)
    console.log(password)

    Axios.post(url,{
      username: login,
      password: password
    })
    .then(res=>{
      props.handleSetIsVisibilityFrame(false)
      props.handleSetToken(res.data.token)
    })
    .catch( err => {
      console.error('Ошибка логирования')
      localStorage.setItem("token","")
    })

  }

  return (
    <>
      <Modal show={props.isVisibilityFrame} onHide={()=>props.handleSetIsVisibilityFrame(false)}>
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

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
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
          <Button variant="secondary" onClick={()=>props.handleSetIsVisibilityFrame(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogInForm;