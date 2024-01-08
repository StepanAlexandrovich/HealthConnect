import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

const CreateDepartmentForm = (props) => {
    const url = 'http://localhost:8082/create_department'
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    const token = localStorage.getItem("token")

    const handleClose = (e) => {
        
    }

    const changeTitle = (e) => {  // uuut
        setTitle(e.target.value) 
    }
    const changeDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleCreateDepartment = (e) => {
        e.preventDefault();

        console.log(title)
        console.log(description)
    
        var data = JSON.stringify({
            "title": title,
            "description": description
        });

        var config = {
            method: 'post',
            url: url,
            headers: { 
                'Authorization': 'Bearer '+ token, 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            props.setIsVisibilityCreateDepartmentFrame(false);
        })
        .catch(function (error) {
            console.log(error);
        });
    
    }

    return (
      <>
      
        <Modal show={props.isVisibilityCreateDepartmentFrame} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
  
              <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={changeTitle}
                  type="text"
                  placeholder="title"
                  autoFocus
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={changeDescription}
                  type="text"
                  placeholder="description"
                  autoFocus
                />
              </Form.Group>
  
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => props.setIsVisibilityCreateDepartmentFrame(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCreateDepartment}>
              Create Department
            </Button>
          </Modal.Footer>
        </Modal>
      </>  
    );
};

export default CreateDepartmentForm;