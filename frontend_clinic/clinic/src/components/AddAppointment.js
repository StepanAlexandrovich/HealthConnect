import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Connection from "../connection/Connection"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddAppointment = (props) => {
    let {departmentId} = useParams();

    const url = 'http://localhost:8082/api/v1/admin/add_appointment'
    const typeRequest = "post"

    const data = {
      "departmentId":"" + departmentId,
      "title": "",
      "description": ""
    }

    // useEffect( ()=>{},[]);

    const changeTitle = (e) => { 
        data.title = e.target.value 
    }

    const changeDescription = (e) => { 
        data.description = e.target.value
    }

    const handleCreateDepartment = (e) => {
        e.preventDefault();

        Connection.request(url,data,typeRequest).then(res=>{ 
            console.log(res.data)
          })
          .catch( err => {
            console.error('Ошибка логирования')
            localStorage.setItem("token","")
          })
    }


    return (
        <>
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

            <Button variant="primary" onClick={handleCreateDepartment}>
              Add
            </Button>
            
        </>
    );
};

export default AddAppointment;