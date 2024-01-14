import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Connection from "../connection/Connection"
import axios from 'axios'

const CreateDepartmentForm = (props) => {
    const handleClose = (e) => {
      props.setIsVisibilityCreateDepartmentFrame(false)
    }

    //------------------------------------------
    const url = 'http://localhost:8082/api/v1/admin/create_department'
    // const url = 'http://localhost:8082/api/v1/admin/image'

    const data = {
      "title":"",
      "description":"",
      // "file":""
    }

    const [file,setFile] = useState();
    const [title,setTitle] = useState();
    const [description,setDescription] = useState();

    const typeRequest = "post"

    const changeTitle = (e) => { setTitle(e.target.value) }
    const changeDescription = (e) => { setDescription(e.target.value)}
    const changeFile = (e) => { 
      // data.file = e.target.files[0] 
      setFile(e.target.files[0])
      console.log(e.target.files[0])
    }

    

    const handleCreateDepartment = (e) => {
        e.preventDefault();

        var token = localStorage.getItem("token");

        console.log(file)

        axios.post(url,{
          title:title,
          description:description,
          file:file
        },
        {headers:{
          'Authorization': 'Bearer '+ token, 
          'content-type': 'multipart/form-data'
        }}
        ).then( response => console.log(response.data) )

        // Connection.requestImage(
        //   url,
        //   data,
        //   typeRequest
        // ).then(function (response) {
        //   console.log(JSON.stringify(response.data));
        //   props.setIsVisibilityCreateDepartmentFrame(false);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
    }

    return (
      <>
      
        <Modal show={props.isVisibilityCreateDepartmentFrame} onHide={() => props.setIsVisibilityCreateDepartmentFrame(false)}>
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

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>download file</Form.Label>
                <Form.Control onChange={changeFile}
                  type="file"
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

}
export default CreateDepartmentForm;