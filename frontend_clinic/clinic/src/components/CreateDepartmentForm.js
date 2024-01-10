import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Connection from "../connection/Connection"

const CreateDepartmentForm = (props) => {
    const handleClose = (e) => {
      props.setIsVisibilityCreateDepartmentFrame(false)
    }

    //------------------------------------------
    const url = 'http://localhost:8082/api/v1/admin/create_department'

    const data = {
      "title":"",
      "description":""
    }

    const typeRequest = "post"

    const changeTitle = (e) => { data.title = e.target.value }
    const changeDescription = (e) => { data.description = e.target.value }

    const handleCreateDepartment = (e) => {
        e.preventDefault();

        Connection.request(
          url,
          data,
          typeRequest
        ).then(function (response) {
          console.log(JSON.stringify(response.data));
          props.setIsVisibilityCreateDepartmentFrame(false);
        })
        .catch(function (error) {
          console.log(error);
        });
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